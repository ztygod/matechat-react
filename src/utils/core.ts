import type { Emitter } from "nanoevents";
import type { AvatarProps } from "../bubble";

export interface BaseEvent<T extends string> {
  id: symbol;
  type: T;
  payload?: unknown;
  timestamp?: number;
}

export interface InputEvent extends BaseEvent<"input"> {
  payload: {
    prompt: string;
  };
}
export interface MessageEvent extends BaseEvent<"message"> {
  payload: MessageParam;
}
export interface ErrorEvent extends BaseEvent<"error"> {
  payload: {
    error: string;
  };
}
export interface ChunkEvent extends BaseEvent<"chunk"> {
  payload: {
    chunk: string;
  };
}

export type EventTypes = InputEvent | MessageEvent | ErrorEvent | ChunkEvent;

export type EventHandler<K extends EventTypes["type"]> = (
  event: Extract<EventTypes, BaseEvent<K>>,
) => void;
export type Events = {
  [key in EventTypes["type"]]: EventHandler<key>;
};

export interface MessageParam {
  role: string;
  content: string;
  avatar?: string | AvatarProps;
  align?: "left" | "center" | "right";
}

export type Awaitable<T> = T | Promise<T>;

export interface Backend {
  name: string;
  emitter: Emitter<Events>;
  input(prompt: string, config: unknown): Awaitable<void>;
  getMessages: () => Awaitable<MessageParam[]>;
  on<K extends EventTypes["type"]>(type: K, handler: Events[K]): () => void;
}

class Agent<BackendType extends Backend = Backend> {
  id: symbol;
  backend: BackendType | undefined;

  constructor() {
    this.id = Symbol("agent");
  }

  setBackend(backend: BackendType): void {
    this.backend = backend;
  }

  getBackend(): BackendType | undefined {
    return this.backend;
  }
}

export function createAgent(): Agent {
  const newAgent = new Agent();
  if (!agent) {
    agent = newAgent;
  }
  return agent;
}

export let agent: Agent | undefined;

export function useAgent() {
  if (!agent) {
    throw new Error("Agent not initialized");
  }
  return { agent };
}
