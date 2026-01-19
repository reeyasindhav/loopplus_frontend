interface ChatMessageProps {
    role: "user" | "assistant";
    content: string;
    timestamp?: string;
}

export default function ChatMessage({ role, content, timestamp = "Just now" }: ChatMessageProps) {
    if (role === "user") {
        return (
            <div className="flex items-end gap-3 justify-end group">
                <div className="flex flex-col gap-1 items-end max-w-[80%]">
                    <p className="text-[#4e976b] text-xs font-medium mb-1 mr-1">You</p>
                    <div className="text-sm md:text-base font-normal leading-relaxed rounded-2xl rounded-br-none px-5 py-3 bg-[#19e66b]/20 text-[#0e1b13] border border-[#19e66b]/30">
                        {content}
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#19e66b] to-blue-400 shrink-0 mb-1"></div>
            </div>
        );
    }

    return (
        <div className="flex gap-4 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#19e66b] to-emerald-700 shrink-0 mt-1 shadow-sm flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]">smart_toy</span>
            </div>
            <div className="flex flex-1 flex-col gap-3 max-w-full overflow-hidden">
                <div className="flex items-center gap-2">
                    <p className="text-[#0e1b13] dark:text-white text-sm font-bold">LoopPlus AI</p>
                    <span className="text-[#4e976b] text-xs">{timestamp}</span>
                </div>
                <div className="text-[#0e1b13] dark:text-white text-sm md:text-base leading-relaxed space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                {/* AI Actions */}
                <div className="flex gap-2 mt-1">
                    <button className="p-1.5 rounded-md text-gray-400 hover:text-[#0e1b13] hover:bg-black/5 transition-colors" title="Copy">
                        <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                    <button className="p-1.5 rounded-md text-gray-400 hover:text-[#0e1b13] hover:bg-black/5 transition-colors" title="Regenerate">
                        <span className="material-symbols-outlined text-[18px]">refresh</span>
                    </button>
                    <div className="w-px h-4 bg-gray-200 my-auto mx-1"></div>
                    <button className="p-1.5 rounded-md text-gray-400 hover:text-[#19e66b] hover:bg-[#19e66b]/10 transition-colors" title="Good response">
                        <span className="material-symbols-outlined text-[18px]">thumb_up</span>
                    </button>
                    <button className="p-1.5 rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors" title="Bad response">
                        <span className="material-symbols-outlined text-[18px]">thumb_down</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
