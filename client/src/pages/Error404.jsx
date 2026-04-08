import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, SearchCode, Sparkles } from "lucide-react";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-100px] top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-80px] top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-100px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10">
          <SearchCode className="h-10 w-10" />
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-300">
          <Sparkles className="h-4 w-4" />
          Oops, this page got lost in the code
        </div>

        <h1 className="mt-6 text-6xl font-black tracking-tight md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold md:text-4xl">
          Page not found
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
          The page you’re looking for doesn’t exist, was moved, or the route is
          incorrect. Let’s get you back to learning and visualizing code.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <Home className="h-4 w-4" />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm font-semibold text-cyan-300">Try Home</p>
            <p className="mt-2 text-sm text-white/60">
              Head back to the landing page and restart your journey.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm font-semibold text-fuchsia-300">Open Learn</p>
            <p className="mt-2 text-sm text-white/60">
              Jump directly into learning concepts and coding basics.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-sm font-semibold text-violet-300">Use Visualizer</p>
            <p className="mt-2 text-sm text-white/60">
              Explore code execution visually and understand logic faster.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}