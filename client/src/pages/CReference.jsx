import { useNavigate } from "react-router-dom";

const sections = [
  {
    title: "What is C?",
    content:
      "C is a general-purpose programming language that emphasizes efficiency and low-level memory control. It is widely used for systems programming, embedded devices, and performance-critical applications.",
  },
  {
    title: "Basic Syntax",
    content:
      "A C program is made of functions, with `main()` as the entry point. Statements end with semicolons and blocks are written with curly braces.",
    code: [
      "#include <stdio.h>",
      "",
      "int main(void) {",
      "  printf(\"Hello, C!\n\");",
      "  return 0;",
      "}",
    ],
  },
  {
    title: "Data Types",
    content:
      "C has built-in data types such as `int`, `char`, `float`, and `double`. Use `signed` or `unsigned` modifiers to control numeric range.",
  },
  {
    title: "Variables and Declarations",
    content:
      "Declare variables before use. C requires explicit types, and variables can be initialized at declaration time.",
    code: [
      "int count = 10;",
      "char letter = 'A';",
      "float average = 3.14f;",
    ],
  },
  {
    title: "Control Flow",
    content:
      "Use `if`, `else`, `switch`, `for`, `while`, and `do...while` to control execution. The condition expression must evaluate to a truthy or falsy integer value.",
    code: [
      "for (int i = 0; i < 5; i++) {",
      "  printf(\"%d\n\", i);",
      "}",
    ],
  },
  {
    title: "Functions",
    content:
      "Functions are declared with return type and parameter list. `void` indicates no parameters or no return value.",
    code: [
      "int add(int x, int y) {",
      "  return x + y;",
      "}",
      "",
      "int main(void) {",
      "  int sum = add(2, 3);",
      "  printf(\"%d\n\", sum);",
      "  return 0;",
      "}",
    ],
  },
  {
    title: "Pointers",
    content:
      "Pointers store memory addresses. Use `*` to declare a pointer and `&` to get the address of a variable.",
    code: [
      "int value = 42;",
      "int *p = &value;",
      "printf(\"%d\n\", *p);",
    ],
  },
  {
    title: "Arrays",
    content:
      "Arrays are contiguous blocks of memory. The array name is a pointer to its first element.",
    code: [
      "int numbers[3] = {1, 2, 3};",
      "for (int i = 0; i < 3; i++) {",
      "  printf(\"%d\n\", numbers[i]);",
      "}",
    ],
  },
  {
    title: "Compilation",
    content:
      "Compile C code using a compiler like `gcc`. Example: `gcc program.c -o program`. Then run with `./program`.",
  },
];

export default function CReference() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-black/30">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold">C Language Reference</h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              A focused C learning section inspired by common C language documentation. Covers the basics, control flow, functions, pointers, and arrays.
            </p>
          </div>
          <button
            onClick={() => navigate("/learn")}
            className="rounded-2xl border border-white/10 bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Back to Learn
          </button>
        </header>

        <div className="space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-slate-300">{section.content}</p>
              {section.code && (
                <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-900 p-4 text-sm text-slate-100">
                  {section.code.join("\n")}
                </pre>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
