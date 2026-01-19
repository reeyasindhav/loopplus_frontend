"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export default function ProfilePage() {
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [copied, setCopied] = useState(false);
    const [notifEnabled, setNotifEnabled] = useState(true);
    const [isCreator, setIsCreator] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check local storage or system preference
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setDarkMode(true);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText("https://loopplus.ai/ref/janedoe123");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!mounted) {
        return null; // or a loading skeleton to prevent hydration mismatch
    }

    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] min-h-screen font-sans transition-colors duration-300">
            <Header />

            <main className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 text-center sm:text-left">
                        <h1 className="text-4xl font-extrabold text-[#0e1b13] dark:text-white mb-2">My Profile</h1>
                        <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
                    </div>

                    <div className="space-y-8">
                        {/* Personal Information */}
                        <section className="bg-white dark:bg-[#1a2e22] rounded-3xl p-8 shadow-sm border border-[#e7f3ec] dark:border-white/5 hover:shadow-md transition-shadow duration-300">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                                <div className="relative group">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#19e66b] to-emerald-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                        JD
                                    </div>
                                    <button className="absolute bottom-0 right-0 w-8 h-8 bg-white dark:bg-[#2c3e33] rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 hover:text-[#19e66b] shadow-sm transition-colors">
                                        <span className="material-symbols-outlined text-sm">edit</span>
                                    </button>
                                </div>
                                <div className="flex-1 w-full space-y-6">
                                    <h2 className="text-xl font-bold text-[#0e1b13] dark:text-white border-b border-gray-100 dark:border-white/10 pb-4">
                                        Personal Information
                                    </h2>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
                                            <input
                                                type="text"
                                                defaultValue="Jane Doe"
                                                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                                            <input
                                                type="email"
                                                defaultValue="jane@university.edu"
                                                className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Academic Information */}
                        <section className="bg-white dark:bg-[#1a2e22] rounded-3xl p-8 shadow-sm border border-[#e7f3ec] dark:border-white/5 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-xl font-bold text-[#0e1b13] dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#19e66b]">school</span>
                                Academic Information
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-2 space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">University</label>
                                    <input
                                        type="text"
                                        defaultValue="University of Cincinnati"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Major</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Computer Science"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:border-transparent transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Year</label>
                                    <div className="relative">
                                        <select
                                            className="w-full h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:border-transparent transition-all appearance-none cursor-pointer"
                                        >
                                            <option>Freshman</option>
                                            <option>Sophomore</option>
                                            <option>Junior</option>
                                            <option>Senior</option>
                                            <option>Graduate</option>
                                            <option>PhD</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">▼</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Rewards & Growth */}
                        <section className="bg-white dark:bg-[#1a2e22] rounded-3xl p-8 shadow-sm border border-[#e7f3ec] dark:border-white/5 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-xl font-bold text-[#0e1b13] dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#19e66b]">monetization_on</span>
                                Rewards & Growth
                            </h2>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Referral Card */}
                                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#19e66b]/10 to-[#19e66b]/5 border border-[#19e66b]/20 p-6">
                                    <div className="mb-4">
                                        <h3 className="text-lg font-bold text-[#0e1b13] dark:text-white">Refer Friends</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                            Get 1 month free for every 10 signups!
                                        </p>
                                    </div>
                                    <div className="flex gap-2 bg-white dark:bg-[#112117] p-1.5 rounded-xl border border-[#19e66b]/20">
                                        <input
                                            type="text"
                                            readOnly
                                            value="loopplus.ai/ref/jane"
                                            className="flex-1 bg-transparent px-3 text-sm text-[#0e1b13] dark:text-white focus:outline-none truncate"
                                        />
                                        <button
                                            onClick={copyToClipboard}
                                            className="p-2 rounded-lg bg-[#19e66b] text-[#0e1b13] hover:bg-[#15c65c] transition-colors"
                                        >
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>

                                {/* TikTok Creator Card */}
                                <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 flex flex-col justify-between bg-gray-50 dark:bg-[#112117]/50">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold text-[#0e1b13] dark:text-white">Influencer Program</h3>
                                            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Beta</span>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Opt in for 10% commission on referrals.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-6">
                                        <span className={`text-xs font-medium px-2 py-1 rounded-md ${isCreator ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'}`}>
                                            {isCreator ? 'Active' : 'Inactive'}
                                        </span>
                                        <button
                                            onClick={() => setIsCreator(!isCreator)}
                                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:ring-offset-2 ${isCreator ? 'bg-[#19e66b]' : 'bg-gray-300 dark:bg-gray-600'}`}
                                        >
                                            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isCreator ? 'translate-x-5' : 'translate-x-0'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Preferences */}
                        <section className="bg-white dark:bg-[#1a2e22] rounded-3xl p-8 shadow-sm border border-[#e7f3ec] dark:border-white/5 hover:shadow-md transition-shadow duration-300">
                            <h2 className="text-xl font-bold text-[#0e1b13] dark:text-white border-b border-gray-100 dark:border-white/10 pb-4 mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#19e66b]">tune</span>
                                Preferences
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="font-semibold text-[#0e1b13] dark:text-white">Email Notifications</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive weekly digests and feature updates.</p>
                                    </div>
                                    <button
                                        onClick={() => setNotifEnabled(!notifEnabled)}
                                        className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:ring-offset-2 ${notifEnabled ? 'bg-[#19e66b]' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    >
                                        <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>

                                <div className="flex items-center justify-between group">
                                    <div>
                                        <p className="font-semibold text-[#0e1b13] dark:text-white">Dark Mode</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark themes.</p>
                                    </div>
                                    <button
                                        onClick={toggleDarkMode}
                                        className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#19e66b] focus:ring-offset-2 ${darkMode ? 'bg-[#19e66b]' : 'bg-gray-300 dark:bg-gray-600'}`}
                                    >
                                        <span className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${darkMode ? 'translate-x-5' : 'translate-x-0'}`} />
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Danger Zone */}
                        <section className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-8 border border-red-100 dark:border-red-900/30">
                            <h2 className="text-xl font-bold text-red-600 mb-2">Danger Zone</h2>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                                Once you delete your account, there is no going back. Please be certain.
                            </p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-[#0e1b13] dark:text-white">Delete Account</p>
                                </div>
                                <button className="px-5 py-2.5 text-sm font-bold text-red-600 bg-white dark:bg-transparent border border-red-200 dark:border-red-800 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors shadow-sm">
                                    Delete Data
                                </button>
                            </div>
                        </section>

                        {/* Actions */}
                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 h-11 bg-[#19e66b] hover:bg-[#15c65c] text-[#0e1b13] font-bold text-base rounded-lg transition-all shadow-md hover:shadow-[#19e66b]/20 hover:-translate-y-0.5">
                                Save Changes
                            </button>
                            <Link
                                href="/"
                                className="flex-1 h-11 flex items-center justify-center border border-[#e7f3ec] dark:border-white/10 text-[#0e1b13] dark:text-white font-bold text-base rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
