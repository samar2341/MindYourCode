import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  Eye,
  GraduationCap,
  LayoutDashboard,
  PlayCircle,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function MindYourCodeHomepage() {
  const navigate = useNavigate();
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStartLearning = () => navigate("/learn");
  const handleWatchDemo = () => navigate("/visualize/for-loop");
  const handleLogin = () => navigate("/login");

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

  const features = [
    {
      icon: Eye,
      title: "Visual code execution",
      description:
        "See your code run live, line by line, instead of imagining what happens.",
    },
    {
      icon: Brain,
      title: "Understand logic faster",
      description:
        "Turn dry runs, loops, and conditions into something simple and intuitive.",
    },
    {
      icon: LayoutDashboard,
      title: "Track variables clearly",
      description:
        "Watch variable values, iterations, and outputs change in real time.",
    },
    {
      icon: BookOpen,
      title: "Learn with examples",
      description:
        "Explore coding concepts through interactive examples instead of static notes.",
    },
    {
      icon: Target,
      title: "Placement-focused learning",
      description:
        "Build strong problem-solving and debugging skills for exams and interviews.",
    },
    {
      icon: Sparkles,
      title: "Modern learning experience",
      description:
        "A stylish dark interface that makes studying feel sharp, smooth, and fun.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: GraduationCap,
      title: "Pick a topic",
      description:
        "Choose loops, arrays, conditions, patterns, or beginner-friendly problems.",
    },
    {
      number: "02",
      icon: PlayCircle,
      title: "Run it visually",
      description:
        "Watch each line execute while the platform explains flow and variable changes.",
    },
    {
      number: "03",
      icon: Zap,
      title: "Master the concept",
      description:
        "Build real understanding so you can solve problems without fear.",
    },
  ];

  const perks = [
    "Built for students and beginners",
    "Makes dry run practice easier",
    "Perfect for logic building",
    "Helps reduce coding fear",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-[-120px] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute right-[-80px] top-0 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-[-80px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-6 md:px-10 lg:px-16">
          {/* NAVBAR */}
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300 shadow-lg shadow-cyan-500/10">
                <Code2 className="h-5 w-5" />
              </div>
              <h1 className="text-lg font-bold tracking-wide">Mind Your Code</h1>
            </div>

            <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                How it works
              </a>
              <a href="#why-us" className="transition hover:text-white">
                Why us
              </a>
              <button
                onClick={handleWatchDemo}
                className="transition hover:text-white"
              >
                Demo
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleStartLearning}
                className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Start Learning
              </button>
              <button
                onClick={handleLogin}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Login
              </button>
            </div>
          </nav>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                Code less blindly. Understand more deeply.
              </div>

              <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl xl:text-7xl">
                Don’t just
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
                  write code
                </span>
                <span className="block">see it think.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Mind Your Code helps beginners truly understand programming with
                live execution, visual logic, and step-by-step learning that
                makes coding feel clear instead of confusing.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={handleStartLearning}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
                >
                  Start Free
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={handleWatchDemo}
                  className="rounded-2xl border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {perks.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {(statusMessage || errorMessage) && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  {statusMessage && <p className="text-cyan-300">{statusMessage}</p>}
                  {errorMessage && <p className="text-red-400">{errorMessage}</p>}
                </div>
              )}
            </motion.div>

            {/* HERO VISUAL */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-fuchsia-500/20 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-2xl bg-black/60 p-5 font-mono text-sm leading-7 text-white/90">
                    <p className="text-cyan-300">for (i = 0; i &lt; n; i++) {"{"}</p>
                    <p className="ml-4">sum = sum + arr[i];</p>
                    <p className="ml-4 text-fuchsia-400">// current line</p>
                    <p>{"}"}</p>

                    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-3 text-white/70">
                      <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
                        Explanation
                      </p>
                      <p className="mt-2">
                        The loop is currently adding the value at index 1 to the total sum.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-cyan-500/10 p-4">
                      <p className="text-sm text-cyan-300">Current step</p>
                      <p className="mt-1 text-lg font-semibold">Adding arr[1]</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-4">
                      <p className="text-sm text-white/50">Variable state</p>
                      <div className="mt-3 space-y-2 text-white/90">
                        <p>i: 1</p>
                        <p>arr[i]: 4</p>
                        <p>sum: 9</p>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-fuchsia-500/10 p-4">
                      <p className="text-sm text-fuchsia-300">Learning outcome</p>
                      <p className="mt-1 text-white/80">
                        You understand what changed and why.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF STRIP */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 text-center text-sm text-white/50 md:grid-cols-4 md:px-10 lg:px-16">
          <div>Visual learning for beginners</div>
          <div>Step-by-step execution flow</div>
          <div>Clean logic-first approach</div>
          <div>Made for learning confidence</div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-4xl font-bold md:text-5xl">
            Everything you need to learn coding better
          </h3>
          <p className="mt-5 text-white/60">
            Designed to make coding concepts feel simpler, clearer, and more memorable.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                  <Icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h4 className="mt-5 text-xl font-semibold">{feature.title}</h4>
                <p className="mt-3 leading-7 text-white/60">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white/5 py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-4xl font-bold md:text-5xl">How it works</h3>
            <p className="mt-5 text-white/60">
              A simple learning flow that helps you move from confusion to clarity.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-slate-900 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-500/10">
                      <Icon className="h-6 w-6 text-fuchsia-400" />
                    </div>
                    <span className="text-sm font-semibold text-white/30">{step.number}</span>
                  </div>

                  <h4 className="mt-5 text-2xl font-semibold">{step.title}</h4>
                  <p className="mt-3 leading-7 text-white/60">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-4xl font-bold md:text-5xl">
              Why beginners will love this
            </h3>
            <p className="mt-5 max-w-xl leading-8 text-white/60">
              Most platforms show code and expect you to understand it. Mind Your Code
              helps you watch logic unfold, so concepts become easier to grasp and harder to forget.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "See each line execute in order",
                "Understand loops and variables visually",
                "Improve dry-run and debugging confidence",
                "Study smarter for class and placements",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 p-8">
            <div className="rounded-[1.5rem] bg-slate-950/80 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Core promise
              </p>
              <h4 className="mt-4 text-3xl font-bold">
                Learn code with clarity, not chaos.
              </h4>
              <p className="mt-4 leading-8 text-white/60">
                This is not just another coding page. It is a visual learning experience
                built to help students finally understand what their code is doing.
              </p>

              <button
                onClick={handleWatchDemo}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02]"
              >
                Try the visualizer
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-xl">
          <h3 className="text-4xl font-bold md:text-5xl">
            Ready to make coding click?
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Start learning with a platform that helps you understand code visually,
            build stronger logic, and grow your confidence faster.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={handleStartLearning}
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Get Started
            </button>

            <button
              onClick={handleAuthorInfo}
              disabled={loading}
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10 disabled:opacity-50"
            >
              {loading ? "Loading..." : "Author Info"}
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950 py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Mind Your Code</h3>
              </div>
              <p className="text-white/60">
                Learn coding visually and build real understanding step by step.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Explore</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="#features" className="transition hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="transition hover:text-white">How it works</a></li>
                <li><a href="#why-us" className="transition hover:text-white">Why us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Resources</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="/learn" className="transition hover:text-white">Learning Hub</a></li>
                <li><a href="/visualize/for-loop" className="transition hover:text-white">Visualizer</a></li>
                <li><a href="/docs" className="transition hover:text-white">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Connect</h4>
              <ul className="space-y-2 text-white/60">
                <li><a href="https://github.com" className="transition hover:text-white">GitHub</a></li>
                <li><a href="/login" className="transition hover:text-white">Login</a></li>
                <li><a href="mailto:contact@mindyourcode.com" className="transition hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center text-white/40">
            <p>&copy; 2026 Mind Your Code. All rights reserved. Built with ❤️ by Samar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}