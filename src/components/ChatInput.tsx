import { useState, useRef } from "react";

interface ChatInputProps {
    onSend: (message: string, files: File[]) => void;
    placeholder?: string;
}

export default function ChatInput({ onSend, placeholder = "Ask anything about your courses..." }: ChatInputProps) {
    const [message, setMessage] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        if (message.trim() || files.length > 0) {
            onSend(message, files);
            setMessage("");
            setFiles([]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#f8fcfa] via-[#f8fcfa] to-transparent dark:from-[#112117] dark:via-[#112117] pt-10">
            <div className="max-w-3xl mx-auto w-full">
                {files.length > 0 && (
                    <div className="flex gap-2 mb-2 overflow-x-auto py-2 px-1">
                        {files.map((file, i) => (
                            <div key={i} className="relative group shrink-0">
                                <div className="flex items-center gap-2 p-2 bg-white dark:bg-[#1a2e22] border border-[#d0e7d9] dark:border-white/10 rounded-lg shadow-sm">
                                    <span className="material-symbols-outlined text-[#4e976b]">description</span>
                                    <span className="text-xs text-[#0e1b13] dark:text-white max-w-[100px] truncate">{file.name}</span>
                                    <button
                                        onClick={() => removeFile(i)}
                                        className="ml-1 p-0.5 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[16px]">close</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-white dark:bg-[#1a2e22] border border-[#d0e7d9] dark:border-white/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-[#19e66b]/50 focus-within:border-[#19e66b] flex items-end p-2 gap-2">
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        className="hidden"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />

                    {/* Attach Button */}
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="p-2 text-[#4e976b] hover:text-[#0e1b13] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors shrink-0"
                        title="Attach file"
                    >
                        <span className="material-symbols-outlined text-[24px]">attach_file</span>
                    </button>

                    {/* Text Input */}
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full bg-transparent border-none focus:ring-0 resize-none max-h-32 py-3 text-[#0e1b13] dark:text-white placeholder-[#4e976b]/70 text-base outline-none"
                        placeholder={placeholder}
                        rows={1}
                    />

                    {/* Send Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={!message.trim() && files.length === 0}
                        className="p-2 bg-[#19e66b] hover:bg-[#15c65c] text-[#0e1b13] rounded-lg transition-colors shrink-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Send message"
                    >
                        <span className="material-symbols-outlined text-[20px] font-bold">arrow_upward</span>
                    </button>
                </div>
                <div className="text-center mt-3">
                    <p className="text-xs text-[#4e976b]">LoopPlus can make mistakes. Check important info.</p>
                </div>
            </div>
        </div>
    );
}
