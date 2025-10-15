"use client";

import React from "react";
import {
  Sparkles,
  Book,
  Shield,
  Eye,
  Github,
  MessageCircle,
} from "lucide-react";

// Simplified particles with CSS only
const FloatingParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-purple-400/40"
          style={{
            left: `${(i * 7) % 100}%`,
            animation: `float${i % 3} ${15 + i * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float0 {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(20px);
            opacity: 0;
          }
        }
        @keyframes float1 {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(-20px);
            opacity: 0;
          }
        }
        @keyframes float2 {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-10vh) translateX(10px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <FloatingParticles />

      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-indigo-900/20" />

      {/* Radial glow effect */}
      <div
        className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-purple-600/20 blur-3xl"
        style={{ animationDuration: "4s" }}
      />

      <div className="relative z-10 max-w-4xl px-4 text-center">
        {/* Logo/Title */}
        <div className="mb-8">
          <h1
            className="mb-2 bg-gradient-to-r from-purple-200 via-purple-400 to-pink-300 bg-clip-text text-7xl font-bold text-transparent md:text-9xl"
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "0.05em",
            }}
          >
            MythicAl
          </h1>
          <div className="flex items-center justify-center gap-2 text-purple-300/80">
            <Sparkles className="h-5 w-5" />
            <Sparkles className="h-4 w-4" />
            <Sparkles className="h-5 w-5" />
          </div>
        </div>

        {/* Tagline */}
        <p className="mb-12 text-xl font-light tracking-wide text-purple-200/90 italic md:text-3xl">
          &quot;Your story begins with a whisper.&quot;
        </p>

        {/* CTA Button */}
        <button className="group relative rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-5 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
          <span className="relative z-10 flex items-center gap-2">
            Start Your Quest
            <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
          </span>
        </button>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-purple-300/50 p-1">
            <div className="mx-auto h-2 w-1 animate-pulse rounded-full bg-purple-300/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-purple-200">
            A Living Tale Awaits
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-purple-300/80">
            MythicAl is an AI-powered storytelling experience where your choices
            shape epic fantasy adventures. Collaborate with an intelligent
            Dungeon Master that adapts to your decisions, creating unique
            narratives that respond to your imagination. Powered by local AI
            models for complete privacy and offline play.
          </p>
        </div>

        {/* Example dialogue */}
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="flex justify-start">
            <div className="max-w-md rounded-2xl rounded-tl-none border border-purple-500/30 bg-purple-900/40 px-6 py-4 backdrop-blur-sm">
              <p className="mb-1 text-sm font-semibold text-purple-100/90">
                Dungeon Master
              </p>
              <p className="text-purple-200">
                The ancient door creaks open, revealing a chamber filled with
                ethereal blue light. What do you do?
              </p>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="max-w-md rounded-2xl rounded-tr-none border border-pink-500/30 bg-pink-900/40 px-6 py-4 backdrop-blur-sm">
              <p className="mb-1 text-sm font-semibold text-pink-100/90">You</p>
              <p className="text-pink-200">
                I cautiously step inside and examine the source of the light.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-md rounded-2xl rounded-tl-none border border-purple-500/30 bg-purple-900/40 px-6 py-4 backdrop-blur-sm">
              <p className="mb-1 text-sm font-semibold text-purple-100/90">
                Dungeon Master
              </p>
              <p className="text-purple-200">
                At the chamber&apos;s center floats a crystalline orb, pulsing
                with mysterious energy. As you approach, whispers echo in a
                forgotten tongue...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: Book,
      title: "AI Dungeon Master",
      description: "Intelligent storytelling that adapts to your every choice",
    },
    {
      icon: Sparkles,
      title: "Evolving Stories",
      description: "No two adventures are ever the same",
    },
    {
      icon: Shield,
      title: "Offline & Private",
      description: "Powered by local models—your stories stay yours",
    },
    {
      icon: Eye,
      title: "Visual Immersion",
      description: "Rich descriptions that bring worlds to life",
    },
  ];

  return (
    <section className="relative bg-slate-800 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-bold text-purple-200">
          Forged by Magic & Code
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-8 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
              >
                <div className="relative z-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-purple-300" />
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-purple-100">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-purple-300/70">
                    {feature.description}
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute top-0 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative border-t border-purple-500/20 bg-slate-900 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-2xl font-bold text-transparent">
              MythicAl
            </h3>
            <p className="text-sm text-purple-400/60">
              Where stories come alive through AI
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 rounded-full border border-purple-500/30 bg-slate-800 px-6 py-3 transition-all duration-300 hover:border-purple-500/60 hover:bg-slate-700"
            >
              <Github className="h-5 w-5 text-purple-300 group-hover:text-purple-200" />
              <span className="text-purple-300 group-hover:text-purple-200">
                GitHub
              </span>
            </a>

            <a
              href="#discord"
              className="group relative flex items-center gap-2 rounded-full border border-purple-500/30 bg-slate-800 px-6 py-3 transition-all duration-300 hover:border-purple-500/60 hover:bg-slate-700"
            >
              <MessageCircle className="h-5 w-5 text-purple-300 group-hover:text-purple-200" />
              <span className="text-purple-300 group-hover:text-purple-200">
                Discord
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-purple-500/10 pt-8 text-center">
          <p className="text-sm text-purple-400/40">
            © 2025 MythicAl. Embark on your journey.
          </p>
        </div>
      </div>

      {/* Mystical shimmer line */}
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
};

// Main Page Component
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
