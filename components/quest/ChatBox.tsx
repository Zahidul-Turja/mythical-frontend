"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm MythicAl. How can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content:
          "This is a simulated response. Replace this with your actual AI integration.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  return (
    <div className="flex h-full flex-col">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-8 flex gap-4 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.role === "assistant" && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-600/80 backdrop-blur-sm">
                  <Bot size={18} className="text-white" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 backdrop-blur-md ${
                  message.role === "user"
                    ? "bg-gray-800 text-white shadow-lg shadow-white/5"
                    : "border border-gray-700/50 bg-gray-800/70 text-gray-100 shadow-sm"
                }`}
              >
                <p className="text-sm leading-relaxed break-words whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>

              {message.role === "user" && (
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-700/80 backdrop-blur-sm">
                  <User size={18} className="text-white" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="mb-8 flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm">
                <Bot size={18} className="text-white" />
              </div>
              <div className="max-w-[80%] rounded-2xl border border-gray-700/50 bg-gray-800/70 px-4 py-3 shadow-lg backdrop-blur-md">
                <div className="flex gap-1">
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "0ms" }}
                  ></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "150ms" }}
                  ></span>
                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                    style={{ animationDelay: "300ms" }}
                  ></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-800/50 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Send a message..."
              rows={1}
              className="no-scrollbar w-full resize-none rounded-2xl border border-gray-700/50 bg-gray-800/60 px-4 py-3 pr-12 text-sm text-white placeholder-gray-400 shadow-lg backdrop-blur-md focus:border-purple-600/50 focus:ring-1 focus:ring-purple-600/50 focus:outline-none"
              style={{ maxHeight: "200px" }}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="absolute right-2 bottom-2 rounded-lg bg-purple-600/90 p-2 text-white backdrop-blur-sm transition-all hover:bg-purple-700 hover:shadow-lg hover:shadow-white/30 disabled:cursor-not-allowed disabled:bg-gray-700/60"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-gray-500">
            MythicAl can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );
}
