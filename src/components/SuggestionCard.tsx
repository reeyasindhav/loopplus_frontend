interface SuggestionCardProps {
    icon: string;
    title: string;
    description: string;
    onClick?: () => void;
}

export default function SuggestionCard({ icon, title, description, onClick }: SuggestionCardProps) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col gap-3 rounded-xl border border-[#d0e7d9] dark:border-white/10 bg-white dark:bg-[#1a2e22] p-4 items-start hover:border-[#19e66b] hover:shadow-md hover:shadow-[#19e66b]/5 transition-all duration-200 text-left group"
        >
            <div className="p-2 rounded-lg bg-[#e7f3ec] dark:bg-white/5 text-[#19e66b] group-hover:bg-[#19e66b] group-hover:text-[#0e1b13] transition-colors">
                <span className="material-symbols-outlined text-[24px]">{icon}</span>
            </div>
            <div>
                <h3 className="text-[#0e1b13] dark:text-white text-sm font-bold leading-tight mb-1">{title}</h3>
                <p className="text-xs text-[#4e976b]">{description}</p>
            </div>
        </button>
    );
}
