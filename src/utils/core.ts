import type { Backend } from "./types";

export class Agent {
  constructor(public backend?: Backend) {}
  use(backend: Backend) {
    this.backend = backend;
  }
  static create(backend: Backend) {
    return new Agent(backend);
  }
}

export const agent = new Agent();
export interface MateChatOptions {
  agent: Agent;
}
export function useMateChat(options?: MateChatOptions) {
  const runtime = options?.agent || agent;
  return {
    agent: runtime,
    backend: runtime.backend,
  };
}
