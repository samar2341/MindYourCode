import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Diamond,
  FileText,
  GitBranch,
  Lightbulb,
  PlayCircle,
  Shapes,
} from "lucide-react";

export default function Flowcharts() {
  const navigate = useNavigate();

  const flowNodes = [
    { type: "terminal", label: "Start" },
    { type: "input", label: "Read a, b, c" },
    { type: "process", label: "max = a" },
    { type: "decision", label: "b > max ?" },
    { type: "process", label: "max = b" },
    { type: "decision", label: "c > max ?" },
    { type: "process", label: "max = c" },
    { type: "output", label: "Print max" },
    { type: "terminal", label: "Stop" },
  ];

  const benefits = [
    {
      icon: Brain,
      title: "Understand program flow",
      description: "Flowcharts help students see where decisions, inputs, and outputs actually happen.",
    },
    {
      icon: GitBranch,
      title: "Visualize complex logic",
      description: "Complex conditional statements and loops become much clearer when drawn visually.",
    },
    {
      icon: BookOpen,
      title: "Better debugging",
      description: "Easier to spot logical errors and missing steps in your program flow.",
    },
  ];

  const symbols = [
    { name: "Terminal", meaning: "Start / Stop", icon: PlayCircle },
    { name: "Process", meaning: "Calculation / action", icon: FileText },
    { name: "Decision", meaning: "Yes / No condition", icon: Diamond },
    { name: "Input / Output", meaning: "Read or display data", icon: FileText },
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
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-300">
                <Shapes className="h-4 w-4" />
                Flowchart Learning
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Visualize your
                <span className="block bg-gradient-to-r from-purple-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  programming logic
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Learn how to create flowcharts that make complex programming concepts easy to understand and debug.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-purple-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
                  Start with Symbols
                </button>
                <button
                  onClick={() => navigate("/pseudocode")}
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Learn Pseudocode
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
                <div className="mb-3 flex items-center gap-2 text-purple-300">
                  <GitBranch className="h-4 w-4" />
                  <span className="text-sm font-semibold">Flowchart example</span>
                </div>
                <div className="space-y-2 text-sm">
                  {flowNodes.map((node, index) => (
                    <div key={`${node.label}-${index}`} className="flex flex-col items-center">
                      <div
                        className={`w-full rounded-xl border px-3 py-2 text-center ${
                          node.type === "decision"
                            ? "border-purple-400/30 bg-purple-400/10 text-purple-200"
                            : node.type === "terminal"
                            ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200"
                            : "border-white/10 bg-white/5 text-white/80"
                        }`}
                      >
                        {node.label}
                      </div>
                      {index < flowNodes.length - 1 && <span className="py-1 text-white/35">↓</span>}
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
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Why flowcharts matter</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Make complex logic visible and clear</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Flowcharts transform abstract programming concepts into visual diagrams that anyone can understand.
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
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/10 text-purple-300">
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Flowchart symbols</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Learn the shapes and what each one means
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/60">
                Master the core symbols first so you can read and create simple flowcharts confidently.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {symbols.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="rounded-[1.6rem] border border-white/10 bg-slate-900/80 p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/10 text-purple-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                    <p className="mt-2 text-white/60">{item.meaning}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-400/10 text-purple-300">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/45">Practice problems</p>
                <h2 className="text-2xl font-bold">Create flowcharts for these</h2>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {examples.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-900/80 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-purple-300" />
                  <span className="text-white/75">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-400/10 via-slate-900 to-cyan-400/10 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Creating flowcharts</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Follow this step-by-step process
            </h2>
            <div className="mt-6 space-y-4">
              {[
                "Start with the 'Start' terminal symbol",
                "Add input symbols for data entry",
                "Use process symbols for calculations",
                "Add decision symbols for conditions",
                "Include output symbols for results",
                "End with the 'Stop' terminal symbol",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-400/15 text-sm font-bold text-purple-300">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-white/75">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-purple-400/10 via-slate-900 to-cyan-400/10 p-8 text-center md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">Next step</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Ready to write actual code?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Now that you understand the logic visually, let's convert your flowcharts into working code.
            </p>
            <button
              onClick={() => navigate("/learn")}
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-purple-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Start Coding
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}