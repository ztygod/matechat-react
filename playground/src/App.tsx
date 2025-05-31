import { MessageSquarePlus, MessageSquareWarning } from "lucide-react";
import { Button } from "../../dist/button";
import {
  Prompt,
  PromptDescription,
  PromptTitle,
  Prompts,
} from "../../dist/prompt";

export function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
