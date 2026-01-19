"use client";

import Link from "next/link";

interface ChatHistory {
    id: string;
    title: string;
    active?: boolean;
}

interface ChatSidebarProps {
    histories?: {
        today: ChatHistory[];
        yesterday: ChatHistory[];
    };
}

export default function ChatSidebar({ histories }: ChatSidebarProps) {
    const defaultHistories = {
        today: [
            { id: "1", title: "Biology 101 Notes", active: true },
            { id: "2", title: "Calculus Homework" },
        ],
        yesterday: [
            { id: "3", title: "History Essay Outline" },
        ],
    };

    const data = histories || defaultHistories;

    return (
        <aside className="w-[280px] bg-[#f8fcfa] dark:bg-[#0e1b13] border-r border-[#d0e7d9]/50 dark:border-white/10 flex-col shrink-0 transition-all duration-300 hidden md:flex h-full">
            {/* Logo & Brand */}
            <div className="h-16 flex items-center px-4 gap-2">
                <span className="material-symbols-outlined text-[#19e66b] text-3xl">all_inclusive</span>
                <span className="text-lg font-bold tracking-tight text-[#0e1b13] dark:text-white">LoopPlus</span>
            </div>

            {/* New Chat Button */}
            <div className="px-4 pb-4">
                <button className="flex w-full items-center gap-2 justify-center rounded-lg h-10 px-4 bg-[#19e66b] hover:bg-[#15c65c] text-[#0e1b13] text-sm font-bold shadow-sm transition-colors duration-200">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    <span>New Chat</span>
                </button>
            </div>

            {/* History List */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-3 py-2">
                {data.today.length > 0 && (
                    <div className="mb-6">
                        <h3 className="px-3 text-xs font-semibold text-[#4e976b] uppercase tracking-wider mb-2">Today</h3>
                        <div className="flex flex-col gap-1">
                            {data.today.map((chat) => (
                                <button
                                    key={chat.id}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left group transition-colors ${chat.active
                                            ? "bg-[#e7f3ec] dark:bg-[#19e66b]/10"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"
                                        }`}
                                >
                                    <span className={`material-symbols-outlined text-[20px] ${chat.active ? "text-[#0e1b13] dark:text-white" : "text-[#4e976b] group-hover:text-[#0e1b13] dark:group-hover:text-white"
                                        }`}>
                                        chat_bubble_outline
                                    </span>
                                    <span className={`text-sm font-medium truncate flex-1 ${chat.active ? "text-[#0e1b13] dark:text-white" : "text-[#4e976b] group-hover:text-[#0e1b13] dark:group-hover:text-white"
                                        }`}>
                                        {chat.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {data.yesterday.length > 0 && (
                    <div className="mb-6">
                        <h3 className="px-3 text-xs font-semibold text-[#4e976b] uppercase tracking-wider mb-2">Yesterday</h3>
                        <div className="flex flex-col gap-1">
                            {data.yesterday.map((chat) => (
                                <button
                                    key={chat.id}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-full text-left transition-colors group"
                                >
                                    <span className="material-symbols-outlined text-[#4e976b] text-[20px] group-hover:text-[#0e1b13] dark:group-hover:text-white">
                                        chat_bubble_outline
                                    </span>
                                    <span className="text-sm font-medium text-[#4e976b] group-hover:text-[#0e1b13] dark:group-hover:text-white truncate flex-1">
                                        {chat.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-[#d0e7d9]/50 dark:border-white/10 flex flex-col gap-1">
                <Link
                    href="/profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-full text-left transition-colors text-[#0e1b13] dark:text-white"
                >
                    <span className="material-symbols-outlined text-[22px]">settings</span>
                    <span className="text-sm font-medium">Settings</span>
                </Link>
                <Link
                    href="/profile"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-full text-left transition-colors text-[#0e1b13] dark:text-white"
                >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#19e66b] to-blue-400"></div>
                    <span className="text-sm font-medium">Profile</span>
                </Link>
            </div>
        </aside>
    );
}
