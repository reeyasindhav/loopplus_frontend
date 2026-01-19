import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] antialiased overflow-x-hidden">
      <Header />

      <main className="relative flex flex-col items-center">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden pt-12 pb-16 lg:pt-24 lg:pb-32">
          {/* Background Decorative Elements */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#19e66b]/10 blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>

          <div className="container mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              {/* Hero Content */}
              <div className="flex flex-col items-start gap-6 max-w-2xl">
                <div className="inline-flex items-center rounded-full border border-[#19e66b]/20 bg-[#19e66b]/5 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300">
                  <span className="mr-1 h-2 w-2 rounded-full bg-[#19e66b]"></span> New: Live University Integration
                </div>

                <h1 className="text-4xl font-black leading-tight tracking-tight text-[#0e1b13] sm:text-5xl lg:text-6xl dark:text-white">
                  Your AI Study Buddy for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19e66b] to-green-600">
                    University
                  </span>
                </h1>

                <p className="text-lg text-gray-600 dark:text-gray-300 sm:text-xl leading-relaxed">
                  AI chat with memory, live university data, and student-focused intelligence that outperforms free ChatGPT.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/chat"
                    className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-[#19e66b] px-6 text-base font-bold text-[#0e1b13] shadow-lg shadow-[#19e66b]/25 hover:bg-[#15c65c] hover:scale-105 transition-all duration-200"
                  >
                    Start Chatting
                  </Link>
                  <button className="flex h-12 min-w-[160px] items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:bg-[#1a2e22] dark:text-gray-200 dark:hover:border-gray-600 transition-colors">
                    <span className="material-symbols-outlined text-xl">play_circle</span>
                    Watch Demo
                  </button>
                </div>

                {/* Social Proof */}
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-[#19e66b] to-blue-400"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-purple-400 to-pink-400"></div>
                    <div className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-red-400"></div>
                  </div>
                  <p>Launching at University of Cincinnati</p>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="relative rounded-2xl bg-white border border-gray-200 p-2 shadow-2xl dark:bg-[#1a2e22] dark:border-gray-700">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 relative">
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header UI */}
                      <div className="h-12 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between bg-white dark:bg-gray-900">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-medium text-gray-400">Chat with Memory</div>
                      </div>

                      {/* Chat Area */}
                      <div className="flex-1 p-6 flex flex-col gap-4 overflow-hidden relative">
                        <div className="self-end bg-[#19e66b]/20 text-[#0e1b13] p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                          When are finals for my Bio class?
                        </div>
                        <div className="self-start bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-sm shadow-sm border border-gray-200 dark:border-gray-600">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-[#19e66b] text-base">smart_toy</span>
                            <span className="font-bold text-xs uppercase tracking-wider text-gray-500">LoopPlus AI</span>
                          </div>
                          Based on the University of Cincinnati calendar I just checked, Biology 101 finals are on Dec 12th.
                        </div>

                        {/* Floating Element */}
                        <div className="absolute bottom-12 right-8 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                          <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md text-green-600 dark:text-green-300">
                            <span className="material-symbols-outlined text-xl">event</span>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-gray-900 dark:text-white">Live Data Fetched</div>
                            <div className="text-[10px] text-gray-500">From University Calendar</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl border-2 border-[#19e66b]/20 bg-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Cloud */}
        <section className="w-full border-y border-[#e7f3ec] bg-white py-8 dark:border-gray-800 dark:bg-[#1a2e22]">
          <div className="mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-400">Student-Focused Intelligence for</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0">
              <div className="flex items-center gap-2 text-xl font-bold text-gray-400">
                <span className="material-symbols-outlined">school</span> University of Cincinnati
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-[#f8fcfa] dark:bg-[#112117]">
          <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center text-center">
              <span className="text-[#19e66b] font-bold tracking-wider uppercase text-sm mb-2">Capabilities</span>
              <h2 className="max-w-[720px] text-3xl font-black leading-tight text-[#0e1b13] sm:text-4xl dark:text-white">
                More than just a chatbot
              </h2>
              <p className="mt-4 max-w-[600px] text-lg text-gray-600 dark:text-gray-300">
                LoopPlus combines AI intelligence with live university data and long-term memory.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: "cloud_upload", title: "1. Upload Anything", desc: "Upload PDFs, images, and course materials. The AI uses your files to give precise, context-aware answers." },
                { icon: "memory", title: "2. Long-Term Memory", desc: "No need to repeat yourself. LoopPlus remembers your past conversations and context for better assistance." },
                { icon: "event_available", title: "3. Live Campus Data", desc: "Stay in sync. We fetch real-time events, calendars, and notices from university webpages." },
              ].map((feature, i) => (
                <div key={i} className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-[#1a2e22] dark:ring-gray-700">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-[#19e66b] dark:bg-green-900/20">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0e1b13] dark:text-white">{feature.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-8xl text-[#19e66b]">{feature.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20">
          <div className="container mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#112117] px-6 py-16 text-center shadow-2xl dark:bg-[#1a2e22] sm:px-16 lg:py-24">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#19e66b 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
              <div className="relative z-10 mx-auto max-w-2xl">
                <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Ready to boost your GPA?
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                  Join thousands of students who are studying smarter, not harder. Get started for free today.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/signup"
                    className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-[#19e66b] px-8 text-base font-bold text-[#0e1b13] hover:bg-white transition-colors"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-600 bg-transparent px-8 text-base font-bold text-white hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
                <p className="mt-6 text-sm text-gray-400">No credit card required for free tier.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
