import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BookOpen, Brain, Code2, GraduationCap, LayoutDashboard, PlayCircle, Sparkles, Target, Zap } from "lucide-react";

export default function MindYourCodeHomepage() {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const callBackend = async () => {
    setErrorMessage("");
    setStatusMessage("");
    setLoading(true);

    try {
      const response = await axios.get("/api/status");
      setStatusMessage(response.data.message || "Backend reachable");
      return true;
    } catch (error) {
      setErrorMessage("Unable to reach backend. Please make sure the server is running.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleStartLearning = async () => {
    navigate("/learn");
  };

  const handleStartFree = async () => {
    navigate("/learn");
  };

  const handleWatchDemo = async () => {
    navigate("/visualize/for-loop");
  };

  const handleGetStarted = async () => {
    navigate("/learn");
  };

  const handleAuthorInfo = async () => {
    setLoading(true);
    setStatusMessage("");
    setErrorMessage("");

    try {
      const response = await axios.get("/api/author");
      setStatusMessage(response.data.author || "Author info loaded");
    } catch (error) {
      setErrorMessage("Unable to load author info from backend.");
    } finally {
      setLoading(false);
    }
  };

  const featureCards = [
    {
      icon: PlayCircle,
      title: "Step-by-step code playback",
      description:
        "Run code one step at a time and see exactly what happens at each line without getting lost.",
    },
    {
      icon: Brain,
      title: "Concept-first learning",
      description:
        "Turn confusing programming logic into simple visual explanations built for students and beginners.",
    },
    {
      icon: LayoutDashboard,
      title: "Live variable dashboard",
      description:
        "Track variables, loops, conditions, and outputs in one clean visual panel while execution happens.",
    },
    {
      icon: BookOpen,
      title: "Practice with examples",
      description:
        "Explore curated coding examples and learn by interacting instead of just reading static notes.",
    },
    {
      icon: Target,
      title: "Built for exam + interview prep",
      description:
        "Strengthen logic building, debugging, and dry-run skills for classwork, tests, and coding interviews.",
    },
    {
      icon: Sparkles,
      title: "Modern learning experience",
      description:
        "Clean dark UI with glowing accents that keeps users engaged while learning.",
    },
  ];

  const highlights = [
    "Visualize code, not just read it",
    "Made for students and beginners",
    "Understand loops and logic faster",
  ];

  const learningSteps = [
    {
      number: "01",
      title: "Choose a concept",
      description:
        "Start with arrays, loops, conditions, or beginner-friendly problems.",
      icon: GraduationCap,
    },
    {
      number: "02",
      title: "Watch execution visually",
      description:
        "See each line run with variable updates and execution flow.",
      icon: Code2,
    },
    {
      number: "03",
      title: "Build real understanding",
      description:
        "Develop intuition so you can solve problems confidently.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-6 md:px-10 lg:px-16">
          {/* NAV */}
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Code2 className="h-5 w-5" />
              </div>
              <h1 className="text-lg font-bold">Mind Your Code</h1>
            </div>

            <div className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#features">Features</a>
              <a href="#how-it-works">How it works</a>
              <a href="#why-us">Why us</a>
              <button
                onClick={handleWatchDemo}
                className="text-white/70 transition hover:text-white"
              >
                Visualize
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartLearning}
                disabled={loading}
                className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black disabled:opacity-50"
              >
                {loading ? "Checking backend..." : "Start Learning"}
              </button>
              <button
                onClick={() => navigate("/login")}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </button>
            </div>
          </nav>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-14 py-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-black leading-tight md:text-6xl">
                Learn coding by
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  seeing it live
                </span>
              </h2>

              <p className="mt-6 text-lg text-white/70">
                Stop memorizing dry runs. Understand how code actually works with step-by-step visualization.
              </p>

              <div className="mt-8 flex gap-4 flex-wrap">
                <button
                  onClick={handleStartFree}
                  disabled={loading}
                  className="rounded-2xl bg-white px-6 py-3 font-semibold text-black disabled:opacity-50"
                >
                  {loading ? "Checking backend..." : "Start Free"}
                </button>
                <button
                  onClick={handleWatchDemo}
                  disabled={loading}
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold disabled:opacity-50"
                >
                  {loading ? "Checking backend..." : "Watch Demo"}
                </button>
                <button
                  onClick={handleWatchDemo}
                  disabled={loading}
                  className="rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-white disabled:opacity-50"
                >
                  {loading ? "Checking backend..." : "Visualize Code"}
                </button>
              </div>

              <div className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <span className="text-cyan-400">✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {(statusMessage || errorMessage) && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-left">
                  {statusMessage && <p className="text-cyan-300">{statusMessage}</p>}
                  {errorMessage && <p className="text-red-400">{errorMessage}</p>}
                </div>
              )}
            </motion.div>

            {/* MOCK UI */}
            <motion.div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl bg-black/60 p-4 font-mono text-sm">
                  <p className="text-cyan-300">for (i = 0; i &lt; n; i++) {'{'}</p>
                  <p className="ml-4">sum += arr[i]</p>
                  <p className="ml-4 text-purple-400">current line</p>
                  <p>{'}'}</p>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-cyan-500/10 p-3">
                    <p className="text-sm text-cyan-300">Step 2</p>
                    <p>Adding arr[1]</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-3">
                    <p>i: 1</p>
                    <p>sum: 9</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h3 className="text-4xl font-bold">Powerful learning features</h3>
          <p className="mt-4 text-white/60">
            Everything you need to master coding visually
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <Icon className="h-6 w-6 text-cyan-400" />
                <h4 className="mt-4 text-xl font-semibold">{feature.title}</h4>
                <p className="mt-2 text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white/5 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-center text-4xl font-bold">How it works</h3>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {learningSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="rounded-2xl bg-slate-900 p-6">
                  <Icon className="h-6 w-6 text-purple-400" />
                  <h4 className="mt-4 text-xl font-semibold">{step.title}</h4>
                  <p className="mt-2 text-white/60">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h3 className="text-4xl font-bold">Start your coding journey</h3>
        <p className="mt-4 text-white/60">
          Learn faster with visualization
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={handleGetStarted}
            disabled={loading}
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black disabled:opacity-50"
          >
            {loading ? "Checking backend..." : "Get Started"}
          </button>
          <button
            onClick={handleAuthorInfo}
            disabled={loading}
            className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold disabled:opacity-50"
          >
            {loading ? "Loading info..." : "Author Info"}
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Mind Your Code</h3>
              </div>
              <p className="text-white/60">
                Learn coding with clarity, structure, and style. Visualize code execution step by step.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition">How it works</a></li>
                <li><a href="#why-us" className="hover:text-white transition">Why us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="/docs" className="hover:text-white transition">Documentation</a></li>
                <li><a href="/learn" className="hover:text-white transition">Learning Hub</a></li>
                <li><a href="/visualize/for-loop" className="hover:text-white transition">Visualizer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="https://github.com" className="hover:text-white transition">GitHub</a></li>
                <li><a href="mailto:contact@mindyourcode.com" className="hover:text-white transition">Contact</a></li>
                <li><a href="/login" className="hover:text-white transition">Login</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/40">
            <p>&copy; 2026 Mind Your Code. All rights reserved. Built with ❤️ by Samar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
