"use client";

import { motion } from "framer-motion";
import { FaMagic, FaComments, FaShieldAlt, FaEye } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#141421] to-[#0a0a0f] font-sans text-gray-100">
      {/* --- Animated Background Particles (CSS-based simple version) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full animate-pulse bg-[radial-gradient(circle_at_50%_0%,rgba(90,60,150,0.15),transparent_70%)] opacity-30" />
      </div>

      {/* --- Hero Section --- */}
      <section className="flex flex-col items-center px-6 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-6xl font-bold text-transparent drop-shadow-[0_0_20px_rgba(200,150,255,0.4)] md:text-7xl"
        >
          MythicAl
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-xl text-gray-300 italic"
        >
          “Your story begins with a whisper.”
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="#about"
            className="mt-10 inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(200,150,255,0.6)]"
          >
            Start Your Quest
          </Link>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section
        id="about"
        className="mx-auto max-w-4xl space-y-6 px-6 py-24 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-semibold text-purple-300"
        >
          What is MythicAl?
        </motion.h2>
        <p className="text-lg leading-relaxed text-gray-300">
          MythicAl is an{" "}
          <span className="font-medium text-purple-400">
            AI-powered storytelling game
          </span>{" "}
          where every choice shapes your destiny. A local AI Dungeon Master
          guides you through worlds of wonder, danger, and mystery — no two
          adventures are ever the same.
        </p>

        {/* Example dialogue snippet */}
        <div className="mt-10 rounded-xl border border-purple-700/30 bg-[#141421]/60 p-6 text-left shadow-lg backdrop-blur-md">
          <p className="mb-2 font-semibold text-purple-300">
            🧙‍♂️ AI Dungeon Master:
          </p>
          <p className="mb-4 text-gray-300 italic">
            “The torches flicker as you approach the sealed gate. Do you knock,
            or seek another way?”
          </p>
          <p className="mb-2 font-semibold text-pink-300">🧝‍♀️ You:</p>
          <p className="text-gray-200 italic">
            “I whisper an ancient spell to unlock the gate.”
          </p>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section
        id="features"
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-4xl font-semibold text-pink-300"
        >
          Features of Your Adventure
        </motion.h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <FaMagic size={40} />, title: "AI Dungeon Master" },
            { icon: <FaComments size={40} />, title: "Evolving Stories" },
            { icon: <FaShieldAlt size={40} />, title: "Offline & Private" },
            { icon: <FaEye size={40} />, title: "Visual Immersion" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center rounded-xl border border-pink-600/20 bg-[#141421]/60 p-8 shadow-lg backdrop-blur-md transition-all hover:shadow-[0_0_25px_rgba(255,100,200,0.4)]"
            >
              <div className="mb-4 text-pink-400">{feature.icon}</div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full border-t border-purple-700/30 py-10 text-center text-gray-400">
        <div className="mb-4 flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-300"
          >
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-pink-300">
            Discord (Coming Soon)
          </a>
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} MythicAl — Enter the Realm.
        </p>
      </footer>
    </main>
  );
}
