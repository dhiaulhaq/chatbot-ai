"use client";

import { useChat } from "@ai-sdk/react";
import { cn } from "@/lib/utils";
import { Chat } from "@/components/ui/chat";
import { type Message } from "@/components/ui/chat-message";

export function ChatWithSuggestions() {
  const {
    messages: uiMessages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    isLoading,
    stop,
  } = useChat();

  const messages = uiMessages as unknown as Message[];

  return (
    <div
      className={cn(
        "flex flex-col w-full min-h-[400px] max-h-[600px] h-[70vh] overflow-hidden"
      )}
    >
      <Chat
        className="flex-1 overflow-y-auto"
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        suggestions={[
          "Generate a tasty vegan lasagna recipe for 3 people.",
          "Generate a list of 5 questions for a frontend job interview.",
          "Who won the 2022 FIFA World Cup?",
        ]}
      />
    </div>
  );
}
