import { MessageSquarePlus, MessageSquareWarning } from "lucide-react";
import { useState } from "react";
import { BubbleList } from "../../dist/bubble";
import { Button } from "../../dist/button";
import { Sender } from "../../dist/sender";
import {
  Prompt,
  PromptDescription,
  PromptTitle,
  Prompts,
} from "../../dist/prompt";
import type { MessageParam } from "../../dist/utils";
import { useChat } from "../../dist/utils/chat";
import { useMateChat } from "../../dist/utils/core";

export function App() {
  const initialMessages: MessageParam[] = [
    {
      role: "user",
      content: "Hello, how are you?",
      avatar: {
        text: "U",
      },
      align: "right",
    },
    {
      role: "assistant",
      content:
        "I'm doing well, thank you! How can I assist you today? \
        I'm a language model, so I can understand and respond to a wide range of questions and requests. \
      I can help you with a variety of tasks, such as answering questions, providing information, or helping you with a specific problem.",
      avatar: {
        text: "A",
      },
      align: "left",
    },
  ];

  const { backend } = useMateChat();
  if (!backend) {
    throw new Error("Backend is not set for the agent.");
  }
  const { messages, input, setMessages } = useChat(backend, initialMessages);
  const [prompt, setPrompt] = useState("");

  const onClear = () => {
    setPrompt("");
    setMessages(initialMessages);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="flex flex-col items-center justify-center h-[80vh] w-full max-w-3xl p-4 bg-white rounded-lg shadow-md gap-5">
          <Button onClick={onClear} variant="default" className="self-start">
            <MessageSquarePlus size="1.1rem" />
            Clear
          </Button>
          <BubbleList
            className="max-w-3xl w-full flex-1 overflow-y-auto"
            messages={messages}
          />
          <Prompts className="mx-10">
            <Prompt size="md" className="max-w-xs">
              <PromptTitle>
                <MessageSquareWarning />
                Analysis of the Transformer Model
              </PromptTitle>
              <PromptDescription>
                Give a detailed analysis of the Transformer model.
              </PromptDescription>
            </Prompt>
            <Prompt className="max-w-xs">
              <PromptTitle>
                <MessageSquareWarning />
                Understanding the Attention Mechanism
              </PromptTitle>
              <PromptDescription>
                Explain the attention mechanism in neural networks.
              </PromptDescription>
            </Prompt>
          </Prompts>
          <Sender
            className="w-full"
            initialMessage={prompt}
            input={input}
            onMessageChange={setPrompt}
          />
        </main>
      </div>
    </>
  );
}
