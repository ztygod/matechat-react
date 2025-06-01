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
  role: "user" | "assistant" | "system" | "developer";
  name?: string;
  content: string;
  avatar?: string | AvatarProps;
  align?: "left" | "center" | "right";
}

export type Awaitable<T> = T | Promise<T>;

export interface Backend {
  name: string;
  emitter: Emitter<Events>;
  input(prompt: string, config?: unknown): Awaitable<void>;
  on<K extends EventTypes["type"]>(
    type: K,
    handler: EventHandler<K>,
  ): () => void;
}
