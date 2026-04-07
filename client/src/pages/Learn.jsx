import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Flame,
  GraduationCap,
  Layers3,
  PlayCircle,
  Puzzle,
  Sparkles,
  Star,
  Target,
  Trophy,
} from "lucide-react";

export default function Learn() {
  const categories = [
    {
      title: "Loops",
      description: "Master for loops, while loops, nested loops, dry runs, and iteration logic visually.",
      icon: Layers3,
      lessons: 12,
      level: "Beginner",
    },
    {
      title: "Arrays",
      description: "Understand indexing, traversal, updating, searching, and array problem solving.",
      icon: Code2,
      lessons: 10,
      level: "Beginner",
    },
    {
      title: "Conditions",
      description: "Learn if, else, nested conditions, branching, and logical flow with examples.",
      icon: Brain,
      lessons: 9,
      level: "Beginner",
    },
    {
      title: "Functions",
      description: "Learn parameters, return values, scope, reuse, and function thinking clearly.",
      icon: Puzzle,
      lessons: 11,
      level: "Intermediate",
    },
    {
      title: "Patterns",
      description: "Crack star and number patterns with guided visual thinking and step tracing.",
      icon: Sparkles,
      lessons: 8,
      level: "Practice",
    },
    {
      title: "Quiz Zone",
      description: "Test yourself with output prediction, concept checks, and logic-based mini quizzes.",
      icon: Target,
      lessons: 15,
      level: "Revision",
    },
  ];

  const learningPaths = [
    {
      title: "Beginner Roadmap",
      subtitle: "Start from zero and build confidence one concept at a time.",
      progress: 32,
      modules: "4 / 12 modules",
    },
    {
      title: "Logic Building Track",
      subtitle: "Train your problem-solving brain with practice-heavy lessons.",
      progress: 54,
      modules: "7 / 13 modules",
    },
    {
      title: "Exam Revision Sprint",
      subtitle: "Revise fast with concise lessons, notes, and concept recall.",
      progress: 18,
      modules: "2 / 11 modules",
    },
  ];

  const quickStats = [
    { label: "Lessons", value: "65+", icon: BookOpen },
    { label: "Practice sets", value: "120+", icon: FileText },
    { label: "Quizzes", value: "40+", icon: Trophy },
    { label: "Streak", value: "7 days", icon: Flame },
  ];

  const featureCards = [
    {
      title: "Visual lessons",
      description: "Each lesson explains code with dry runs, state changes, and line-by-line breakdowns.",
      icon: PlayCircle,
    },
    {
      title: "Revision notes",
      description: "Short, clear notes for quick revision before classes, tests, and interviews.",
      icon: FileText,
    },
    {
      title: "Mini quizzes",
      description: "Check understanding after every topic with fast interactive quizzes.",
      icon: Target,
    },
    {
      title: "Skill tracking",
      description: "See progress, completed modules, learning streaks, and growth over time.",
      icon: CheckCircle2,
    },
  ];

  const todayPlan = [
    "Finish loop dry run lesson",
    "Attempt 5 array questions",
    "Revise conditions quick notes",
    "Take mini quiz",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                <GraduationCap className="h-4 w-4" />
                Aesthetic learning hub
              </div>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Learn coding with
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent">
                  clarity, structure, and style
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65 md:text-xl">
                Mind Your Code is not just for visualizing code. It is your full learning side — with guided topics, progress tracking, quizzes, revision notes, and beautiful dashboards that make studying feel motivating.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
                  Start Learning
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                  Explore Topics
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:max-w-2xl">
                {quickStats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-white/50">{item.label}</p>
                          <h3 className="mt-2 text-2xl font-bold">{item.value}</h3>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-2xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/85 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/45">Today’s focus</p>
                    <h2 className="mt-1 text-2xl font-bold">Mastering Loops & Arrays</h2>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      Continue your guided track with concept lessons, visual practice, and a quick quiz.
                    </p>
                  </div>
                  <div className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-semibold text-cyan-300">
                    Level 2
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-cyan-200">Weekly progress</span>
                    <span className="font-semibold text-white">68%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400" />
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Clock3 className="h-4 w-4" />
                      Next lesson
                    </div>
                    <p className="mt-2 font-semibold">Nested loop dry run</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-sm text-white/45">
                      <Star className="h-4 w-4" />
                      Quiz result
                    </div>
                    <p className="mt-2 font-semibold">8 / 10 correct</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/50">Today’s plan</p>
                  <div className="mt-3 space-y-3">
                    {todayPlan.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-white/80">
                        <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Topics</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">Choose what you want to master</h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Topic cards designed like a premium edtech platform so learners can jump into the exact concept they need.
            </p>
          </div>

          <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75 transition hover:bg-white/10">
            View all categories
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-[1.9rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                    {category.level}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold">{category.title}</h3>
                <p className="mt-3 leading-7 text-white/60">{category.description}</p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-white/45">{category.lessons} lessons</span>
                  <span className="flex items-center gap-2 font-medium text-cyan-300">
                    Explore
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-white/5 py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Learning paths</p>
              <h2 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
                Follow structured journeys instead of random tutorials
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/60">
                Give users a proper path: what to study first, what to practice next, and what to revise before quizzes or exams.
              </p>
            </div>

            <div className="grid gap-4">
              {learningPaths.map((path) => (
                <div
                  key={path.title}
                  className="rounded-[1.7rem] border border-white/10 bg-slate-900/80 p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{path.title}</h3>
                      <p className="mt-2 text-white/60">{path.subtitle}</p>
                    </div>
                    <div className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-medium text-cyan-300">
                      {path.modules}
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
                      style={{ width: `${path.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">What makes it good</p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">A complete learning side, not just lessons</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Blend visuals, structure, practice, and progress into one premium experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item, index) => {
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

      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10 lg:px-16">
          <div className="rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-purple-400/10 p-8 text-center md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">Make learning code feel exciting again</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
              Build your learning side with guided lessons, strong visuals, and progress systems that keep students coming back.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-2xl bg-cyan-500 px-6 py-3.5 font-semibold text-black transition hover:-translate-y-0.5">
                Go to Learning Dashboard
              </button>
              <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Browse Free Lessons
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
