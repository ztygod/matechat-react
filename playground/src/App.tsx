import { MessageSquarePlus, MessageSquareWarning } from "lucide-react";
import { useEffect, useState } from "react";
import { BubbleList } from "../../dist/bubble";
import { Button } from "../../dist/button";
import {
  Prompt,
  PromptDescription,
  PromptTitle,
  Prompts,
} from "../../dist/prompt";
import type { MessageParam } from "../../dist/utils";
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
  const [messages, setMessages] = useState<MessageParam[]>(initialMessages);
  useEffect(() => {
    const { backend } = useMateChat();
    if (!backend) {
      throw new Error("Backend is not set for the agent.");
    }
    backend.on("input", (event) => {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: event.payload.prompt,
          avatar: {
            text: "U",
          },
          align: "right",
        },
      ]);
    });
    backend.on("chunk", (event) => {
      setMessages((prev) => {
        const lastMessage = prev[prev.length - 1];
        if (lastMessage && lastMessage.role === "assistant") {
          return [
            ...prev.slice(0, -1),
            {
              ...lastMessage,
              content: lastMessage.content + event.payload.chunk,
            },
          ];
        }
        return [
          ...prev,
          {
            role: "assistant",
            content: event.payload.chunk,
            avatar: {
              text: "A",
            },
            align: "left",
          },
        ];
      });
    });
  }, []);

  const [prompt, setPrompt] = useState<string>("");

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Button variant="default">
          <MessageSquarePlus size="1.1rem" />
          Default
        </Button>
        <BubbleList className="max-w-3xl w-full" messages={messages} />
        <Prompts className="mt-4 mx-10">
          <Prompt size="default" className="max-w-md">
            <PromptTitle>
              <MessageSquareWarning />
              Analysis of the Transformer Model
            </PromptTitle>
            <PromptDescription>
              Give a detailed analysis of the Transformer model, including its
              architecture, key components, and so on.
            </PromptDescription>
          </Prompt>
          <Prompt className="max-w-md">
            <PromptTitle>
              <MessageSquareWarning />
              Understanding the Attention Mechanism
            </PromptTitle>
            <PromptDescription>
              Explain the attention mechanism in neural networks, focusing on
              its role in sequence-to-sequence tasks.
            </PromptDescription>
          </Prompt>
        </Prompts>
        <div className="flex flex-row gap-3 items-center mt-4">
          <input
            type="input"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-4 p-2 border border-gray-300 rounded w-80"
            placeholder="Type your message here..."
          />
          <Button
            className="mt-4"
            onClick={() => {
              if (!prompt) return;
              backend?.input(prompt, {
                messages,
              });
              setPrompt("");
            }}
            disabled={!prompt.trim()}
          >
            Send
          </Button>
        </div>
      </div>
    </>
  );
}
