import pg from "pg";

const { Pool } = pg;

const connectionString =
  process.env.DATABASE_URL ||
  process.env.PG_CONNECTION_STRING ||
  "postgres://localhost:5432/mindyourcode";

const pool = new Pool({
  connectionString,
});

let dbAvailable = true;
const fallbackModules = [];
const fallbackNotes = [];

function initFallbackData() {
  if (fallbackModules.length > 0) return;

  const modules = [
    {
      id: 1,
      title: "JavaScript Loops",
      description: "Step through loop execution with examples for for, while, and nested loops.",
      category: "JavaScript",
      level: "Beginner",
      created_at: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Arrays and Objects",
      description: "Explore collections, indexing, iteration, and common array methods.",
      category: "JavaScript",
      level: "Beginner",
      created_at: new Date().toISOString(),
    },
    {
      id: 3,
      title: "Functions and Scope",
      description: "Learn how functions work, how parameters are passed, and scope rules.",
      category: "JavaScript",
      level: "Intermediate",
      created_at: new Date().toISOString(),
    },
  ];

  const seedNotes = [
    { moduleId: 1, title: "Overview", content: "This module covers the core concept and why it matters." },
    { moduleId: 1, title: "Key syntax", content: "Review syntax rules and common patterns for this topic." },
    { moduleId: 1, title: "Practice tips", content: "Try small examples by hand and trace each line to understand execution." },
    { moduleId: 2, title: "Overview", content: "Arrays and objects are the foundation of many JavaScript programs." },
    { moduleId: 2, title: "Key syntax", content: "Use bracket notation for arrays and property access for objects." },
    { moduleId: 2, title: "Practice tips", content: "Walk through array operations step by step." },
    { moduleId: 3, title: "Overview", content: "Functions organize behavior and enable reuse." },
    { moduleId: 3, title: "Key syntax", content: "Remember to declare parameter names and return values explicitly." },
    { moduleId: 3, title: "Practice tips", content: "Trace the call stack and variable values when functions execute." },
  ];

  fallbackModules.push(...modules);
  fallbackNotes.push(
    ...seedNotes.map((note, index) => ({
      id: index + 1,
      module_id: note.moduleId,
      title: note.title,
      content: note.content,
      created_at: new Date().toISOString(),
    }))
  );
}

async function initDb() {
  try {
    const client = await pool.connect();
    try {
      await client.query(`
        CREATE TABLE IF NOT EXISTS learning_modules (
          id SERIAL PRIMARY KEY,
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          category TEXT NOT NULL,
          level TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );

        CREATE TABLE IF NOT EXISTS notes (
          id SERIAL PRIMARY KEY,
          module_id INTEGER REFERENCES learning_modules(id) ON DELETE CASCADE,
          title TEXT NOT NULL,
          content TEXT NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `);

      const { rows } = await client.query("SELECT id FROM learning_modules LIMIT 1");
      if (rows.length === 0) {
        await seedInitialData(client);
      }
    } finally {
      client.release();
    }
  } catch (error) {
    console.warn("Postgres unavailable; falling back to in-memory store.", error.message);
    dbAvailable = false;
    initFallbackData();
  }
}

async function seedInitialData(client) {
  const moduleInsert = `
    INSERT INTO learning_modules (title, description, category, level)
    VALUES ($1, $2, $3, $4)
    RETURNING id
  `;

  const notesInsert = `
    INSERT INTO notes (module_id, title, content)
    VALUES ($1, $2, $3)
  `;

  const modules = [
    [
      "JavaScript Loops",
      "Step through loop execution with examples for for, while, and nested loops.",
      "JavaScript",
      "Beginner",
    ],
    [
      "Arrays and Objects",
      "Explore collections, indexing, iteration, and common array methods.",
      "JavaScript",
      "Beginner",
    ],
    [
      "Functions and Scope",
      "Learn how functions work, how parameters are passed, and scope rules.",
      "JavaScript",
      "Intermediate",
    ],
  ];

  for (const moduleData of modules) {
    const result = await client.query(moduleInsert, moduleData);
    const moduleId = result.rows[0].id;

    const notes = [
      [moduleId, "Overview", "This module covers the core concept and why it matters."],
      [moduleId, "Key syntax", "Review syntax rules and common patterns for this topic."],
      [moduleId, "Practice tips", "Try small examples by hand and trace each line to understand execution."],
    ];

    for (const note of notes) {
      await client.query(notesInsert, note);
    }
  }
}

async function getModules() {
  if (!dbAvailable) {
    return fallbackModules;
  }

  const result = await pool.query("SELECT * FROM learning_modules ORDER BY id");
  return result.rows;
}

async function getModuleById(id) {
  if (!dbAvailable) {
    return fallbackModules.find((module) => String(module.id) === String(id)) || null;
  }

  const result = await pool.query("SELECT * FROM learning_modules WHERE id = $1", [id]);
  return result.rows[0] || null;
}

async function getNotesByModule(id) {
  if (!dbAvailable) {
    return fallbackNotes.filter((note) => String(note.module_id) === String(id));
  }

  const result = await pool.query(
    "SELECT * FROM notes WHERE module_id = $1 ORDER BY created_at ASC",
    [id]
  );
  return result.rows;
}

async function getAllNotes() {
  if (!dbAvailable) {
    return [...fallbackNotes].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  const result = await pool.query("SELECT * FROM notes ORDER BY created_at DESC");
  return result.rows;
}

async function addModule({ title, description, category, level }) {
  if (!dbAvailable) {
    const newModule = {
      id: fallbackModules.length + 1,
      title,
      description,
      category,
      level,
      created_at: new Date().toISOString(),
    };
    fallbackModules.push(newModule);
    return newModule;
  }

  const result = await pool.query(
    `INSERT INTO learning_modules (title, description, category, level)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [title, description, category, level]
  );
  return result.rows[0];
}

async function addNote({ moduleId, title, content }) {
  if (!dbAvailable) {
    const newNote = {
      id: fallbackNotes.length + 1,
      module_id: Number(moduleId),
      title,
      content,
      created_at: new Date().toISOString(),
    };
    fallbackNotes.push(newNote);
    return newNote;
  }

  const result = await pool.query(
    `INSERT INTO notes (module_id, title, content)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [moduleId, title, content]
  );
  return result.rows[0];
}

export {
  pool,
  initDb,
  getModules,
  getModuleById,
  getNotesByModule,
  getAllNotes,
  addModule,
  addNote,
  dbAvailable,
};
