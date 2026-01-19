import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] min-h-screen">
            <Header />

            <main className="py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-[#0e1b13] dark:text-white mb-8">Terms of Service</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-[#4e976b] mb-8">Last updated: January 2025</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                By accessing and using LoopPlus.ai, you agree to be bound by these Terms of Service
                                and all applicable laws and regulations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">2. Use License</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Permission is granted to temporarily use LoopPlus.ai for personal, non-commercial
                                educational purposes. This license does not include reselling or commercial use.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">3. User Content</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                You retain ownership of all content you upload. By uploading content, you grant us
                                a license to process and analyze it for the purpose of providing our services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">4. Disclaimer</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                LoopPlus.ai is an AI assistant and should not be relied upon as the sole source of
                                academic information. Always verify important information with authoritative sources.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">5. Contact</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                For questions about these Terms, contact us at
                                <a href="mailto:legal@loopplus.ai" className="text-[#19e66b] hover:underline ml-1">legal@loopplus.ai</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
