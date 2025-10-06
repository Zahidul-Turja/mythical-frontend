"use client";

import React, { useState } from "react";
import { Menu, ArrowLeftToLine } from "lucide-react";
import Sidebar from "@/components/game/Sidebar";
import ChatBox from "@/components/game/ChatBox";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Navigation */}
        <nav className="flex h-14 items-center gap-4 border-b border-white/40 bg-black px-4">
          <button
            onClick={toggleSidebar}
            className="rounded-lg p-2 text-white transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            {isSidebarOpen ? <ArrowLeftToLine size={20} /> : <Menu size={20} />}
          </button>
          <h1 className="text-lg font-semibold text-white">MythicAl</h1>
        </nav>

        {/* Messages Area */}
        <main className="flex-1 overflow-y-auto bg-black">
          <ChatBox />
        </main>
      </div>
    </div>
  );
}
