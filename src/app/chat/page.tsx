"use client";

import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import SuggestionCard from "@/components/SuggestionCard";
import { chat, ingestPdf, ingestUrl } from "@/lib/api";

interface Message {
    role: "user" | "assistant";
    content: string;
}

function extractUrls(text: string) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.match(urlRegex) || [];
}

function removeUrls(text: string) {
    return text.replace(/(https?:\/\/[^\s]+)/g, "").trim();
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);

    const suggestions = [
        { icon: "description", title: "Summarize my syllabus", description: "Upload a PDF to get key dates" },
        { icon: "event", title: "When are finals at UC?", description: "Check the university calendar" },
        { icon: "campaign", title: "Campus events today", description: "Find out what's happening now" },
        { icon: "science", title: "Explain Quantum Physics", description: "Simplify complex concepts" },
    ];


    const handleSend = async (message: string, files: File[] = []) => {
        if (!message.trim() && files.length === 0) return;

        // Placeholder for user email until auth context is fully integrated
        const userEmail = "test321@gmail.com";

        try {
            let didIngestSomething = false;

            // 1️⃣ PDF ingestion
            if (files.length > 0) {
                for (const file of files) {
                    await ingestPdf(file, userEmail);
                }

                didIngestSomething = true;

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: `📄 ${files.length} PDF uploaded successfully.`,
                    },
                ]);
            }

            // 2️⃣ URL ingestion
            const urls = extractUrls(message);
            if (urls.length > 0) {
                for (const url of urls) {
                    await ingestUrl(url, userEmail);
                }

                didIngestSomething = true;

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: `🔗 ${urls.length} URL ingested successfully.`,
                    },
                ]);
            }

            // 3️⃣ Clean message
            const cleanedMessage = removeUrls(message);

            // 4️⃣ If user ONLY ingested content, STOP here
            if (!cleanedMessage.trim()) {
                if (didIngestSomething) return;
            }

            // 5️⃣ Show user question
            setMessages((prev) => [
                ...prev,
                { role: "user", content: cleanedMessage },
            ]);

            // 6️⃣ Chat
            const data = await chat(cleanedMessage, userEmail);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.answer,
                },
            ]);
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "⚠️ Failed to process your request.",
                },
            ]);
        }
    };




    const handleSuggestionClick = (title: string) => {
        handleSend(title, []);
    };

    const hasMessages = messages.length > 0;

    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] h-screen w-full overflow-hidden flex selection:bg-[#19e66b]/30">
            <ChatSidebar />

            <main className="flex-1 flex flex-col relative bg-[#f8fcfa] dark:bg-[#112117] h-full">
                {/* Mobile Header */}
                <div className="md:hidden h-14 border-b border-[#d0e7d9]/50 dark:border-white/10 flex items-center px-4 justify-between bg-white dark:bg-[#1a2e22]">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#19e66b] text-2xl">all_inclusive</span>
                        <span className="font-bold text-[#0e1b13] dark:text-white">LoopPlus</span>
                    </div>
                    <button className="text-[#0e1b13] dark:text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Chat Header (when in conversation) */}
                {hasMessages && (
                    <header className="flex items-center justify-between border-b border-[#e7f3ec] px-6 py-3 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                        <div className="flex items-center gap-3 text-[#0e1b13]">
                            <div className="flex flex-col">
                                <h2 className="text-[#0e1b13] dark:text-white text-base font-bold leading-tight">New Chat</h2>
                                <span className="text-xs text-[#4e976b] flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#19e66b]"></span>
                                    Active Session
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 h-9 px-3 rounded-lg bg-[#f8fcfa] hover:bg-[#e7f3ec] text-[#0e1b13] text-sm font-medium transition-colors border border-transparent hover:border-[#e7f3ec]">
                                <span className="material-symbols-outlined text-[18px]">ios_share</span>
                                <span className="hidden sm:inline">Share</span>
                            </button>
                        </div>
                    </header>
                )}

                {/* Chat Content */}
                <div className={`flex-1 overflow-y-auto flex flex-col ${hasMessages ? "px-4 md:px-12 py-6 space-y-8" : "items-center justify-center p-4"} pb-32 w-full max-w-5xl mx-auto`}>
                    {!hasMessages ? (
                        <>
                            {/* Empty State */}
                            <div className="flex flex-col items-center text-center gap-6 mb-12 max-w-2xl">
                                <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/5 border border-[#19e66b]/20 flex items-center justify-center shadow-lg shadow-[#19e66b]/10">
                                    <span className="material-symbols-outlined text-[#19e66b] text-[40px]">school</span>
                                </div>
                                <h1 className="text-[#0e1b13] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight">
                                    How can LoopPlus help your studies today?
                                </h1>
                            </div>

                            {/* Suggestions Grid */}
                            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                                {suggestions.map((suggestion, i) => (
                                    <SuggestionCard
                                        key={i}
                                        icon={suggestion.icon}
                                        title={suggestion.title}
                                        description={suggestion.description}
                                        onClick={() => handleSuggestionClick(suggestion.title)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            {messages.map((msg, i) => (
                                <ChatMessage key={i} role={msg.role} content={msg.content} />
                            ))}
                        </>
                    )}
                </div>

                <ChatInput onSend={handleSend} />
            </main>
        </div>
    );
}
