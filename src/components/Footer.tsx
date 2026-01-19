import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#e7f3ec] bg-white pt-16 pb-8 dark:border-white/10 dark:bg-[#112117]">
            <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                    <div className="flex flex-col gap-4">
                        <Logo />
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            The ultimate AI study companion tailored for university curriculums.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13] dark:text-white">Product</h4>
                        <Link href="/#features" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Features</Link>
                        <Link href="/pricing" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Pricing</Link>
                        <Link href="/chat" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Start Chat</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13] dark:text-white">Company</h4>
                        <Link href="#" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">About Us</Link>
                        {/* <Link href="#" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Blog</Link> */}
                        <Link href="#" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Careers</Link>
                        <Link href="/contact" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Contact Us</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-[#0e1b13] dark:text-white">Legal</h4>
                        <Link href="/privacy" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-sm text-gray-500 hover:text-[#19e66b] dark:text-gray-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>

                <div className="mt-12 border-t border-[#e7f3ec] dark:border-white/10 pt-8 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} LoopPlus.ai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
