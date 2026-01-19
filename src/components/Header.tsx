import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#e7f3ec] bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-[#112117]/90">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <Logo />
                    </Link>

                    <div className="hidden md:flex md:items-center md:gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium text-[#0e1b13] hover:text-[#19e66b] dark:text-gray-300 dark:hover:text-[#19e66b] transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#features"
                            className="text-sm font-medium text-[#0e1b13] hover:text-[#19e66b] dark:text-gray-300 dark:hover:text-[#19e66b] transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/pricing"
                            className="text-sm font-medium text-[#0e1b13] hover:text-[#19e66b] dark:text-gray-300 dark:hover:text-[#19e66b] transition-colors"
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-[#0e1b13] hover:text-[#19e66b] dark:text-gray-300 dark:hover:text-[#19e66b] transition-colors"
                        >
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/login"
                            className="hidden sm:flex h-9 items-center justify-center rounded-lg px-4 text-sm font-bold text-[#0e1b13] hover:bg-gray-100 dark:text-white dark:hover:bg-white/10 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="flex h-9 items-center justify-center rounded-lg bg-[#19e66b] px-4 text-sm font-bold text-[#0e1b13] hover:bg-[#15c65c] transition-colors shadow-sm shadow-[#19e66b]/20"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
