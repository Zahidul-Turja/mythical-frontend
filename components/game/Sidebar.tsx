"use client";

import React, { useState } from "react";

import { chatHistories } from "@/public/dummy_data";
import { Plus, MessageSquare, Trash2 } from "lucide-react";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const [chats, setChats] = useState<typeof chatHistories>(chatHistories);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const groupChatsByDate = () => {
    const groups: { [key: string]: typeof chats } = {};
    chats.forEach((chat) => {
      if (!groups[chat.date]) {
        groups[chat.date] = [];
      }
      groups[chat.date].push(chat);
    });
    return groups;
  };

  const groupedChats = groupChatsByDate();
  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-0"
      } flex flex-col overflow-hidden border-r border-white/30 bg-black text-gray-50 transition-all duration-300`}
    >
      <div className="border-b border-white/30 p-4">
        <button className="hover:bg-white/border-white/30 flex w-full items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 transition-colors">
          <Plus size={18} />
          <span className="text-sm font-medium">New chat</span>
        </button>
      </div>

      <div className="no-scrollbar flex-1 overflow-y-auto p-3">
        {Object.entries(groupedChats).map(([date, chatList]) => (
          <div key={date} className="mb-4">
            <h3 className="mb-2 px-3 text-xs font-semibold text-gray-400">
              {date}
            </h3>
            {chatList.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`group mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  selectedChat === chat.id ? "bg-gray-800" : "hover:bg-gray-800"
                }`}
              >
                <MessageSquare size={16} className="flex-shrink-0" />
                <span className="flex-1 truncate text-left text-sm">
                  {chat.title}
                </span>
                <Trash2
                  size={14}
                  className="flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
            U
          </div>
          <span className="text-sm font-medium">User</span>
        </div>
      </div>
    </div>
  );
}
