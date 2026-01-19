import Image from "next/image";

export default function Logo({ size = "default" }: { size?: "default" | "large" }) {
    const dimension = size === "large" ? 48 : 32;
    const textSize = size === "large" ? "text-xl" : "text-lg";

    return (
        <div className="flex items-center gap-3">
            <div className="relative">
                <Image
                    src="/logo.png"
                    alt="LoopPlus Logo"
                    width={dimension}
                    height={dimension}
                    className="object-contain"
                />
            </div>
            <span className={`${textSize} font-bold tracking-tight text-[#0e1b13] dark:text-white`}>
                LoopPlus.ai
            </span>
        </div>
    );
}
