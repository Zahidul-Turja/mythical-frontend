"use client";

import React, { useState } from "react";
import { chatHistories } from "@/public/dummy_data";
import { Menu, X, Plus, MessageSquare, Trash2 } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chats, setChats] = useState(chatHistories);
  const [selectedChat, setSelectedChat] = useState(1);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } no-scrollbar flex flex-col overflow-hidden bg-black text-gray-50 transition-all duration-300`}
      >
        <div className="border-b border-gray-700 p-4">
          <button className="flex w-full items-center gap-2 rounded-lg bg-gray-800 px-4 py-3 transition-colors hover:bg-gray-700">
            <Plus size={18} />
            <span className="text-sm font-medium">New chat</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
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
                    selectedChat === chat.id
                      ? "bg-gray-800"
                      : "hover:bg-gray-800"
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

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <nav className="flex h-14 items-center gap-4 border-b border-white/40 bg-black px-4">
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 transition-colors hover:bg-gray-100"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-lg font-semibold text-white">MythicAl</h1>
        </nav>

        {/* Messages Area */}
        <main className="flex-1 overflow-y-auto bg-black">{children}</main>
      </div>
    </div>
  );
}
