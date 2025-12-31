import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-emerald-400">PAIB BHAWANA</h1>
        <div className="space-x-8 text-sm text-gray-300">
          <Link href="/" className="hover:text-emerald-400">Home</Link>
          <Link href="/about" className="text-emerald-400">About</Link>
          <Link href="/services" className="hover:text-emerald-400">Services</Link>
          <Link href="/contact" className="hover:text-emerald-400">Contact</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-12 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-emerald-400">Me</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I’m <span className="text-emerald-400 font-semibold">Muhammad Asif</span>,
          an AI & Full-Stack Developer and a student at <b>PAIB Bhawana</b>.
          I specialize in building intelligent, scalable, and automation-driven
          digital solutions for modern businesses.
        </p>
      </section>

      {/* Profile Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center px-12 py-24 bg-zinc-900">
        <img
          src="/pic.jpg"
          alt="Muhammad Asif"
          className="rounded-2xl shadow-2xl"
        />

        <div>
          <h3 className="text-3xl font-bold mb-4 text-emerald-400">
            Who I Am
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            I build AI-powered web applications with a strong focus on
            <b> AI Automation, Agentic AI, and Chatbots</b>.
            My goal is to combine clean frontend design with powerful backend
            logic and AI intelligence.
          </p>

          <p className="text-gray-400 leading-relaxed">
            From automating workflows to deploying conversational AI,
            I help businesses save time, reduce cost, and scale efficiently.
          </p>

          <p className="mt-6 text-gray-300">
            👨‍🏫 Supervisor:
            <span className="text-emerald-400 ml-1">Asif Langrah</span>
          </p>
        </div>
      </section>

      {/* Skills / Focus */}
      <section className="px-12 py-24">
        <h3 className="text-3xl font-bold text-center mb-14 text-emerald-400">
          What I Work On
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">AI Automation</h4>
            <p className="text-gray-400">
              Automating tasks and workflows using intelligent AI systems.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">AI Chatbots</h4>
            <p className="text-gray-400">
              Smart chatbots for websites, WhatsApp, and customer support.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            <h4 className="text-xl font-semibold mb-3">Full-Stack Development</h4>
            <p className="text-gray-400">
              Modern UI with Next.js, React, Tailwind & backend integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-center py-6 text-gray-500 text-sm">
        © 2025 PAIB BHAWANA | Developed by M Asif
      </footer>

    </div>
  );
};

export default AboutPage;
