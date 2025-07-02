declare module '*.png' {
    const value: string;
    export default value;
}

declare module '@matechat/react' {
  import * as React from 'react';

  export const Bubble: React.FC<any>;
  export const List: React.FC<any>;
  export const Prompts: React.FC<any>;
  export const Prompt: React.FC<any>;
  export const PromptTitle: React.FC<any>;
  export const PromptDescription: React.FC<any>;
  export const SenderButton: React.FC<any>;
  export const Sender: React.FC<any>;
  export const Button: React.FC<any>;
}

  