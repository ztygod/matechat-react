import { type Emitter, createNanoEvents } from "nanoevents";
import OpenAI, { type ClientOptions } from "openai";
import type {
  ChatCompletionMessageParam,
  ChatCompletionUserMessageParam,
} from "openai/resources";
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

export interface InputConfig {
  withChatHistory?: boolean;
}

export class OpenAIBackend implements Backend {
  name: string;
  instance: OpenAI;
  messages: ChatCompletionMessageParam[];
  emitter: Emitter<Events>;

  constructor(public config: OpenAIBackendConfig) {
    this.name = "OpenAI";
    this.instance = new OpenAI(config);
    this.messages = [];
    this.emitter = createNanoEvents<Events>();
  }

  async input(prompt: string, config: InputConfig): Promise<void> {
    const msg: ChatCompletionUserMessageParam = {
      role: "user",
      content: prompt,
    };
    const { withChatHistory } = config;
    if (withChatHistory) {
      this.messages.push(msg);
    }
    try {
      const response = await this.instance.chat.completions.create({
        model: this.config.model || "gpt-3.5-turbo",
        messages: withChatHistory ? this.messages : [msg],
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

  getMessages(): MessageParam[] {
    return this.messages as MessageParam[];
  }

  clearMessages(): void {
    this.messages = [];
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
