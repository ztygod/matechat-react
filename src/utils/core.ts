import type { Backend } from "./types";

/**
 * MateChat Agent class.
 */
export class Agent {
  constructor(public backend?: Backend) {}
  /**
   * Use a backend to interact with the agent.
   * @param backend The backend to use.
   */
  use(backend: Backend) {
    this.backend = backend;
  }
  /**
   * Create a new agent with a backend.
   * @param backend The backend to use.
   * @returns A new agent.
   */
  static create(backend: Backend) {
    return new Agent(backend);
  }
}

export const agent = new Agent();
/**
 * Options for the `useMateChat` hook.
 * @param agent The agent to use.
 */
export interface MateChatOptions {
  agent: Agent;
}
/**
 * A hook to use the MateChat agent.
 * @param options The options for the hook.
 * @returns The agent and backend.
 */
export function useMateChat(options?: MateChatOptions) {
  const runtime = options?.agent || agent;
  return {
    agent: runtime,
    backend: runtime.backend,
  };
}

export default agent;
