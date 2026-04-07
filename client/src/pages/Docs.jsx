import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "JavaScript Syntax",
    content:
      "JavaScript uses statements and expressions. Use `const` and `let` for variables, curly braces for blocks, and semicolons optionally to end lines.",
  },
  {
    title: "Variables and Types",
    content:
      "Primitive values include strings, numbers, booleans, null, undefined, and symbols. Objects and arrays are reference types.",
  },
  {
    title: "Control Flow",
    content:
      "Use `if`, `else`, `switch`, `for`, `while`, and `do...while` to control execution. `break` and `continue` modify loop flow.",
  },
  {
    title: "Functions",
    content:
      "Define reusable behavior with function declarations, arrow functions, or methods inside objects. Functions can return values and capture variables from outer scope.",
  },
  {
    title: "Arrays and Objects",
    content:
      "Arrays hold ordered lists. Objects hold keyed values. Use array methods like `map`, `filter`, and `reduce` for iteration.",
  },
  {
    title: "Example: For Loop",
    code: [
      "const values = [1, 2, 3];",
      "let total = 0;",
      "for (let i = 0; i < values.length; i++) {",
      "  total += values[i];",
      "}",
      "console.log(total);",
    ],
  },
];

export default function Docs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/30">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Programming Notes</h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              A quick reference for JavaScript fundamentals, control flow, functions, and core language concepts.
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="rounded-2xl border border-white/10 bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to Home
          </button>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-slate-300">{section.content}</p>
              {section.code && (
                <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-900 p-4 text-sm text-slate-100">
                  {section.code.join("\n")}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
