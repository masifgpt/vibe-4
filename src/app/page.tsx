import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-zinc-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-emerald-400">PAIB BHAWANA</h1>
        <div className="space-x-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <Link href="/about" className="hover:text-emerald-400">About</Link>
          <Link href="/services" className="hover:text-emerald-400">Services</Link>
          <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-12 py-24">
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            AI Solutions for Modern Businesses
          </h2>
          <p className="text-gray-300 mb-4">
            Hi, I’m <span className="text-emerald-400 font-semibold">M Asif</span>,
            Student & AI Developer at <b>PAIB BHAWANA</b>.
          </p>
          <p className="text-gray-400 mb-6">
            We help companies automate workflows, deploy AI chatbots,
            and build intelligent software solutions.
          </p>

          <p className="text-gray-300 mb-6">
            👨‍🏫 Supervisor:
            <span className="text-emerald-400 ml-1">Asif Langrah</span>
          </p>

          <button className="bg-emerald-500 hover:bg-emerald-600 px-8 py-3 rounded-lg font-semibold">
            Get Started
          </button>
        </div>

        <img
          src="/aipic.png"
          alt="AI Technology"
          className="rounded-2xl shadow-2xl"
        />
      </section>

      {/* Automation Section (Image Left) */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-12 py-24 bg-zinc-900">
        <img
          src="/chatbot.jpg"
          alt="AI Automation"
          className="rounded-2xl shadow-xl"
        />

        <div>
          <h3 className="text-3xl font-bold mb-4 text-emerald-400">
            AI Automation
          </h3>
          <p className="text-gray-300 mb-4">
            Automate repetitive tasks and business workflows using
            intelligent AI-powered systems.
          </p>
          <p className="text-gray-400">
            Our automation solutions reduce cost, save time, and
            improve operational efficiency.
          </p>
        </div>
      </section>

      {/* Chatbot Section (Text Left) */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-12 py-24">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-emerald-400">
            AI Chatbots
          </h3>
          <p className="text-gray-300 mb-4">
            Smart AI chatbots for websites, WhatsApp, and customer support.
          </p>
          <p className="text-gray-400">
            Provide instant replies, lead generation, and 24/7 support
            with conversational AI.
          </p>
        </div>

        <img
          src="/chatbot.jpg"
          alt="AI Chatbot"
          className="rounded-2xl shadow-xl"
        />
      </section>

      {/* Services Grid */}
      <section className="px-12 py-24 bg-zinc-900">
        <h3 className="text-3xl font-bold text-center mb-14 text-emerald-400">
          Our Core Services
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">AI Automation</h4>
            <p className="text-gray-400">
              End-to-end business automation using AI tools.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">AI Chatbots</h4>
            <p className="text-gray-400">
              Conversational AI for customer engagement.
            </p>
          </div>

          <div className="bg-zinc-950 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">AI Software</h4>
            <p className="text-gray-400">
              Custom AI-powered software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="text-center py-20">
        <h3 className="text-2xl font-bold mb-4 text-emerald-400">
          24/7 Services Available
        </h3>
        <p className="text-gray-400">
          We are always available to support your business with AI solutions.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-center py-6 text-gray-500 text-sm">
        © 2025 PAIB BHAWANA | Developed by M Asif
      </footer>

    </div>
  );
};

export default page;
