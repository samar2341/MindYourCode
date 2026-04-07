import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  Lightbulb,
  Sparkles,
} from "lucide-react";

export default function Pseudocode() {
  const navigate = useNavigate();

  const pseudoSteps = [
    "Start",
    "Input three numbers a, b, c",
    "Set max = a",
    "If b > max, set max = b",
    "If c > max, set max = c",
    "Print max",
    "Stop",
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Think before coding",
      description: "Train learners to solve the problem logically before worrying about syntax errors.",
    },
    {
      icon: Code2,
      title: "Write cleaner code",
      description: "Pseudocode reduces confusion and makes the final program easier to build.",
    },
    {
      icon: BookOpen,
      title: "Improve exam answers",
      description: "Very useful for viva, practical files, theory exams, and logic-based questions.",
    },
  ];

  const examples = [
    "Find the largest of three numbers",
    "Check whether a number is even or odd",
    "Find the sum of array elements",
    "Display factorial of a number",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <FileText className="h-4 w-4" />
                Pseudocode Learning
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Master the art of
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                  planning with pseudocode
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Learn how to break down problems into simple, logical steps using plain English before writing actual code.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
                  Start with Examples
                </button>
                <button
                  onClick={() => navigate("/flowcharts")}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn Flowcharts
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4">
                <div className="mb-3 flex items-center gap-2 text-cyan-300">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm font-semibold">Pseudocode example</span>
                </div>
                <div className="space-y-2 font-mono text-sm text-white/80">
                  {pseudoSteps.map((step, index) => (
                    <div key={step} className="rounded-xl bg-white/5 px-3 py-2">
                      {index + 1}. {step}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Why pseudocode matters</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Build strong problem-solving fundamentals</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Pseudocode helps students focus on logic rather than syntax, making programming more accessible and less intimidating.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/45">Practice problems</p>
                  <h2 className="text-2xl font-bold">Convert these to pseudocode</h2>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {examples.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-900/80 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-300" />
                    <span className="text-white/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Writing pseudocode</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Follow this simple process
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  "Read the problem statement carefully",
                  "Identify inputs and outputs",
                  "Break down the solution into steps",
                  "Write each step in plain English",
                  "Test your logic mentally",
                ].map((step, index) => (
                  <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/15 text-sm font-bold text-cyan-300">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-white/75">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Next step</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Ready to visualize your logic?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Learn how to convert your pseudocode into visual flowcharts that make complex logic easy to understand.
            </p>
            <button
              onClick={() => navigate("/flowcharts")}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Learn Flowcharts
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}