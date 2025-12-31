import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-emerald-400">PAIB BHAWANA</h1>
        <div className="space-x-8 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact" className="text-emerald-400">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-12 py-24 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Get In <span className="text-emerald-400">Touch</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          Have a project in mind or want to automate your business with AI?
          Let’s connect and build something intelligent together.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="px-12 py-24 bg-zinc-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">

          {/* WhatsApp */}
          <a
            href="https://wa.me/923707615224"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-emerald-400 transition"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-400">+92 370 761 5224</p>
          </a>

          {/* Email */}
          <a
            href="mailto:masifgpt@gmail.com"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-emerald-400 transition"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              Email
            </h3>
            <p className="text-gray-400">masifgpt@gmail.com</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/m.asif.423683"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-emerald-400 transition"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              Facebook
            </h3>
            <p className="text-gray-400">Connect on Facebook</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-asif-30163737a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-8 hover:border-emerald-400 transition"
          >
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              LinkedIn
            </h3>
            <p className="text-gray-400">Professional Profile</p>
          </a>

        </div>
      </section>

      {/* Availability Section */}
      <section className="text-center py-20">
        <h3 className="text-2xl font-bold mb-4 text-emerald-400">
          Available 24/7
        </h3>
        <p className="text-gray-400">
          Ready to support your business with AI automation and smart solutions.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 text-center py-6 text-gray-500 text-sm">
        © 2025 PAIB BHAWANA | Developed by M Asif
      </footer>

    </div>
  );
}
