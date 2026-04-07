import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Eye,
  PlayCircle,
  RotateCcw,
  SkipBack,
  SkipForward,
  Sparkles,
  Timer,
} from "lucide-react";

const demoCode = [
  "function findSum(arr) {",
  "  let sum = 0;",
  "  for (let i = 0; i < arr.length; i++) {",
  "    sum += arr[i];",
  "  }",
  "  return sum;",
  "}",
  "",
  "const numbers = [2, 4, 6];",
  "const result = findSum(numbers);",
];

const executionSteps = [
  {
    line: 1,
    title: "Initialize sum",
    explanation: "A variable named sum is created and starts at 0.",
    variables: { arr: "[2, 4, 6]", sum: 0, i: "-", result: "-" },
    output: "",
  },
  {
    line: 2,
    title: "Loop starts",
    explanation: "The loop begins with i = 0, so the first array value is ready to be added.",
    variables: { arr: "[2, 4, 6]", sum: 0, i: 0, result: "-" },
    output: "",
  },
  {
    line: 3,
    title: "Add first value",
    explanation: "arr[0] is 2, so sum becomes 2.",
    variables: { arr: "[2, 4, 6]", sum: 2, i: 0, result: "-" },
    output: "",
  },
  {
    line: 2,
    title: "Second iteration",
    explanation: "Now i becomes 1 and the loop continues.",
    variables: { arr: "[2, 4, 6]", sum: 2, i: 1, result: "-" },
    output: "",
  },
  {
    line: 3,
    title: "Add second value",
    explanation: "arr[1] is 4, so sum becomes 6.",
    variables: { arr: "[2, 4, 6]", sum: 6, i: 1, result: "-" },
    output: "",
  },
  {
    line: 2,
    title: "Third iteration",
    explanation: "Now i becomes 2 and the loop continues one more time.",
    variables: { arr: "[2, 4, 6]", sum: 6, i: 2, result: "-" },
    output: "",
  },
  {
    line: 3,
    title: "Add third value",
    explanation: "arr[2] is 6, so sum becomes 12.",
    variables: { arr: "[2, 4, 6]", sum: 12, i: 2, result: "-" },
    output: "",
  },
  {
    line: 5,
    title: "Return value",
    explanation: "The function finishes and returns the final sum.",
    variables: { arr: "[2, 4, 6]", sum: 12, i: 3, result: 12 },
    output: "12",
  },
];

const insights = [
  "Current line is highlighted during execution",
  "Variables update after every step",
  "Explanation panel tells the learner what changed",
  "Output becomes visible when the function returns",
];

export default function Visualize() {
  const [currentStep, setCurrentStep] = useState(0);
  const [codeInput, setCodeInput] = useState(demoCode.join("\n"));

  const activeStep = executionSteps[currentStep];
  const progress = useMemo(
    () => ((currentStep + 1) / executionSteps.length) * 100,
    [currentStep]
  );

  const goNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, executionSteps.length - 1));
  };

  const goPrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Eye className="h-4 w-4" />
                Code visualizer
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
                Watch your code
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                  execute step by step
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Learn what each line does, how variables change, and why the output appears.
                This page turns code execution into a clear visual story.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
                  Run Visualization
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                  Try Another Example
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/85 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/45">Live status</p>
                    <h2 className="mt-1 text-2xl font-bold">{activeStep.title}</h2>
                  </div>
                  <div className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-semibold text-cyan-300">
                    Step {currentStep + 1} / {executionSteps.length}
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Brain className="h-4 w-4" />
                      Current explanation
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/80">{activeStep.explanation}</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Timer className="h-4 w-4" />
                      Final output
                    </div>
                    <p className="mt-2 text-xl font-bold text-cyan-300">
                      {activeStep.output || "Waiting for return..."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.85fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  <Code2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/45">Code editor</p>
                  <h3 className="text-xl font-semibold">Sample snippet</h3>
                </div>
              </div>
              <button className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70">
                JavaScript
              </button>
            </div>

            <textarea
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              className="h-[26rem] w-full resize-none rounded-[1.5rem] border border-white/10 bg-slate-950 p-4 font-mono text-sm leading-7 text-white/90 outline-none"
              spellCheck={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">Execution panel</p>
                <h3 className="text-xl font-semibold">Highlighted code</h3>
              </div>
              <div className="rounded-full bg-purple-400/10 px-3 py-1 text-sm text-purple-300">
                Line {activeStep.line + 1}
              </div>
            </div>

            <div className="space-y-2 rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-4 font-mono text-sm leading-7">
              {demoCode.map((line, index) => {
                const isActive = index === activeStep.line;
                return (
                  <div
                    key={`${index}-${line}`}
                    className={`flex gap-3 rounded-xl px-3 py-1.5 transition ${
                      isActive
                        ? "bg-cyan-400/15 text-cyan-200"
                        : "text-white/75"
                    }`}
                  >
                    <span className="w-6 text-white/30">{index + 1}</span>
                    <span>{line || " "}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={goPrev}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                <SkipBack className="h-4 w-4" />
                Prev
              </button>
              <button
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                <SkipForward className="h-4 w-4" />
                Next Step
              </button>
              <button
                onClick={resetSteps}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Variables</p>
                  <h3 className="text-xl font-semibold">Memory view</h3>
                </div>
                <Sparkles className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="space-y-3">
                {Object.entries(activeStep.variables).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3"
                  >
                    <span className="text-white/65">{key}</span>
                    <span className="font-semibold text-cyan-300">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/45">Learning insights</p>
                  <h3 className="text-xl font-semibold">What this teaches</h3>
                </div>
                <PlayCircle className="h-5 w-5 text-purple-300" />
              </div>

              <div className="space-y-3">
                {insights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-900/80 px-4 py-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <p className="text-sm leading-6 text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Next upgrade
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Add real parser logic and dynamic examples next
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/65">
                This UI is ready for backend or local execution logic. After that, users can paste real code and watch genuine step-by-step execution.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
              Build Runtime Logic
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
