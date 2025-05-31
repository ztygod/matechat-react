import { MessageSquarePlus, MessageSquareWarning } from "lucide-react";
import { Bubble, BubbleList, type MessageParam } from "../../dist/bubble";
import { Button } from "../../dist/button";
import {
  Prompt,
  PromptDescription,
  PromptTitle,
  Prompts,
} from "../../dist/prompt";

export function App() {
  const messages: MessageParam[] = [
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

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <BubbleList className="max-w-3xl w-full" messages={messages} />
        <Bubble text="Hello?" />
        <Button variant="default">
          <MessageSquarePlus size="1.1rem" />
          Default
        </Button>
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
      </div>
    </>
  );
}
