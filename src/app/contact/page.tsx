import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] min-h-screen">
            <Header />

            <main className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-extrabold text-[#0e1b13] dark:text-white sm:text-5xl mb-4">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            We'd love to hear from you. Send us a message and we'll reply as soon as possible.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-[#1a2e22] rounded-2xl p-8 shadow-xl border border-[#e7f3ec] dark:border-white/10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full h-12 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full h-12 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full h-12 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full h-12 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 transition-all appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Support/Technical Issue</option>
                                    <option>Feedback</option>
                                    <option>Business/Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full p-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 transition-all resize-none"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full h-12 bg-[#19e66b] text-[#0e1b13] font-bold rounded-lg hover:bg-[#15c65c] transition-all hover:shadow-lg hover:shadow-[#19e66b]/20"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-sm text-gray-500 dark:text-gray-400">
                        <div className="p-4 rounded-xl bg-white dark:bg-[#1a2e22] border border-[#e7f3ec] dark:border-white/5">
                            <span className="material-symbols-outlined text-3xl text-[#19e66b] mb-3">email</span>
                            <p className="font-semibold text-[#0e1b13] dark:text-white">Email Us</p>
                            <p className="mt-1">support@loopplus.ai</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-[#1a2e22] border border-[#e7f3ec] dark:border-white/5">
                            <span className="material-symbols-outlined text-3xl text-[#19e66b] mb-3">chat</span>
                            <p className="font-semibold text-[#0e1b13] dark:text-white">Live Chat</p>
                            <p className="mt-1">Available 9am - 5pm EST</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white dark:bg-[#1a2e22] border border-[#e7f3ec] dark:border-white/5">
                            <span className="material-symbols-outlined text-3xl text-[#19e66b] mb-3">location_on</span>
                            <p className="font-semibold text-[#0e1b13] dark:text-white">Office</p>
                            <p className="mt-1">San Francisco, CA</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
