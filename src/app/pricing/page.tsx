"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
    return (
        <div className="bg-[#f8fcfa] dark:bg-[#112117] min-h-screen font-sans">
            <Header />

            <main className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            Choose the perfect plan for your learning journey
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
                        {/* Free Tier */}
                        <PricingCard
                            title="Free"
                            price="$0"
                            period="/month"
                            description="Perfect for getting started"
                            features={[
                                { text: "Basic AI Chat Access", sub: "Limited daily messages" },
                                { text: "Standard Response Speed", sub: "Good for casual usage" },
                                { text: "Community Support", sub: "Access to forums" },
                            ]}
                            buttonText="Get Started"
                            buttonVariant="outline"
                        />

                        {/* Loop Tier (Popular) */}
                        <PricingCard
                            title="Loop"
                            price="$9"
                            period="/month"
                            description="Everything you need to excel"
                            popular={true}
                            features={[
                                { text: "Unlimited Messages", sub: "Chat with AI 24/7" },
                                { text: "PDF & Image Analysis", sub: "Upload course material" },
                                { text: "Priority Access", sub: "Faster responses" },
                                { text: "Citation Generation", sub: "APA, MLA, Chicago" },
                            ]}
                            buttonText="Upgrade to Loop"
                            buttonVariant="solid"
                        />

                        {/* SuperLoop Tier */}
                        <PricingCard
                            title="SuperLoop"
                            price="$19"
                            period="/month"
                            description="For power users and researchers"
                            features={[
                                { text: "Deep Research Mode", sub: "Advanced reasoning models" },
                                { text: "API Access", sub: "Integrate with your tools" },
                                { text: "Extended Context Window", sub: "Process larger documents" },
                                { text: "Dedicated Support", sub: "Priority email support" },
                            ]}
                            buttonText="Get SuperLoop"
                            buttonVariant="outline"
                        />
                    </div>

                    {/* Referral Promo */}
                    <div className="text-center mb-24">
                        <Link href="/profile" className="inline-flex items-center gap-2 text-[#4e976b] hover:text-[#19e66b] font-medium transition-colors">
                            <span className="bg-[#19e66b]/10 p-1 rounded-full">🎁</span>
                            Want Loop for free? Refer 10 friends
                            <span>→</span>
                        </Link>
                    </div>

                    <FAQSection />
                </div>
            </main>

            <Footer />
        </div>
    );
}

// --- Components ---

interface PricingCardProps {
    title: string;
    price: string;
    period: string;
    description: string;
    features: { text: string; sub: string }[];
    popular?: boolean;
    buttonText: string;
    buttonVariant: 'solid' | 'outline';
}

function PricingCard({ title, price, period, description, features, popular, buttonText, buttonVariant }: PricingCardProps) {
    return (
        <div className={`relative flex flex-col p-8 bg-white dark:bg-[#1e2e24] rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02] ${popular ? 'border-2 border-[#19e66b] ring-4 ring-[#19e66b]/10' : 'border border-gray-100 dark:border-gray-800'}`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#19e66b] text-[#0e1b13] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{description}</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-gray-900 dark:text-white">{price}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium">{period}</span>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
                {features.map((feature, idx) => (
                    <Feature key={idx} text={feature.text} sub={feature.sub} />
                ))}
            </ul>

            <button
                className={`w-full h-12 font-bold rounded-lg transition-all duration-200 ${buttonVariant === 'solid'
                    ? 'bg-[#19e66b] text-[#0e1b13] hover:bg-[#15c65c] hover:shadow-lg hover:shadow-[#19e66b]/20'
                    : 'bg-transparent border-2 border-[#19e66b] text-[#19e66b] hover:bg-[#19e66b]/5'
                    }`}
            >
                {buttonText}
            </button>
        </div>
    );
}

function Feature({ text, sub }: { text: string; sub: string }) {
    return (
        <li className="flex gap-3 items-start">
            <span className="text-[#19e66b] text-lg leading-none mt-1">✔</span>
            <div>
                <p className="font-medium text-gray-900 dark:text-gray-200 leading-tight">{text}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{sub}</p>
            </div>
        </li>
    );
}

import { ChevronDown } from "lucide-react";

function FAQSection() {
    const faqs = [
        {
            question: "What is the difference between Loop and SuperLoop?",
            answer: "Loop is designed for students and professionals who need consistent, daily AI assistance with unlimited standard chart. SuperLoop gives you access to our most powerful reasoning models and larger context windows for complex research tasks."
        },
        {
            question: "Can I cancel my subscription at any time?",
            answer: "Yes, absolutely. You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing cycle."
        },
        {
            question: "What does 'per loop' mean in the SuperLoop plan?",
            answer: "The SuperLoop plan is a usage-based or high-tier package where you pay for specific comprehensive research loops or advanced project workflows, offering deeper analysis than standard chat."
        },
        {
            question: "Is there a student discount available?",
            answer: "The Loop plan is already optimized for education pricing, but we do offer special bulk pricing for institutions. Contact our sales team for more information."
        }
    ];

    return (
        <div className="max-w-3xl mx-auto mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Frequently Asked Questions
            </h3>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            <div className="mt-12 text-center bg-[#e7f3ec] dark:bg-[#1a2e22]/50 p-8 rounded-2xl border border-[#19e66b]/20">
                <p className="font-semibold text-[#0e1b13] dark:text-white mb-2">Still have questions?</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-[#19e66b] rounded-lg hover:bg-[#15c65c] hover:shadow-lg hover:shadow-[#19e66b]/20">
                    Get in touch
                </Link>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`border rounded-lg overflow-hidden bg-white dark:bg-[#1e2e24] transition-colors duration-200 ${isOpen ? 'border-[#19e66b] shadow-md' : 'border-gray-200 dark:border-gray-800'}`}>
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-transparent hover:bg-gray-50 dark:hover:bg-[#25382c]/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-bold text-[#0e1b13] dark:text-white text-lg pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 text-[#19e66b] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
}
