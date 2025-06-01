import { type Emitter, createNanoEvents } from "nanoevents";
import OpenAI, { type ClientOptions } from "openai";
import type { ChatCompletionUserMessageParam } from "openai/resources";
import type {
  Backend,
  BaseEvent,
  EventTypes,
  Events,
  MessageParam,
} from "./core";

export interface OpenAIBackendConfig extends ClientOptions {
  model?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface InputOptions {
  /**
   * Additional options for the input, such as system messages or user messages.
   * If not provided, a default user message will be used.
   * @default undefined
   */
  messages?: MessageParam[];
}

export class OpenAIBackend implements Backend {
  name: string;
  instance: OpenAI;
  emitter: Emitter<Events>;

  constructor(public config: OpenAIBackendConfig) {
    this.name = "OpenAI";
    this.instance = new OpenAI(config);
    this.emitter = createNanoEvents<Events>();
  }

  async input(prompt: string, options: InputOptions): Promise<void> {
    const msg: ChatCompletionUserMessageParam = {
      role: "user",
      content: prompt,
    };
    const { messages } = options;
    try {
      const response = await this.instance.chat.completions.create({
        model: this.config.model || "gpt-3.5-turbo",
        messages: messages ?? [msg],
        ...this.config,
        stream: true,
        response_format: { type: "text" },
      });
      for await (const chunk of response) {
        this.emitter.emit("chunk", {
          id: Symbol(chunk.id),
          type: "chunk",
          payload: { chunk: chunk.choices[0].delta.content || "" },
        });
      }
    } catch (error) {
      this.emitter.emit("error", {
        id: Symbol(),
        type: "error",
        payload: { error: (error as Error).message },
      });
    }
  }

  on<K extends EventTypes["type"]>(
    type: K,
    handler: Events[K] extends (event: BaseEvent<K>) => void
      ? Events[K]
      : never,
  ): () => void {
    return this.emitter.on(type, handler);
  }
}
