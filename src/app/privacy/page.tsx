import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] min-h-screen">
            <Header />

            <main className="py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-black text-[#0e1b13] dark:text-white mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-[#4e976b] mb-8">Last updated: January 2025</p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">1. Information We Collect</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We collect information you provide directly to us, including your name, email address,
                                university affiliation, and the documents you upload to our platform.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We use the information we collect to provide, maintain, and improve our services,
                                including to process your documents and generate study materials.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">3. Data Security</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We implement appropriate security measures to protect your personal information
                                against unauthorized access, alteration, disclosure, or destruction.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-[#0e1b13] dark:text-white mb-4">4. Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at
                                <a href="mailto:privacy@loopplus.ai" className="text-[#19e66b] hover:underline ml-1">privacy@loopplus.ai</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
