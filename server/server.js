import express, { json } from "express";
import cors from "cors";
import {
  initDb,
  getModules,
  getModuleById,
  getNotesByModule,
  getAllNotes,
} from "./db/db.js";

const app = express();
app.use(cors());
app.use(json());

try {
  await initDb();
} catch (error) {
  console.error("Failed to initialize database:", error.message);
}

app.get("/", (req, res) => {
  res.send("Mind Your Code API Running");
});

app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "Mind Your Code API running" });
});

app.get("/api/author", (req, res) => {
  res.json({ author: "Created by Samar and the Mind Your Code Team" });
});

app.get("/api/modules", async (req, res) => {
  try {
    const modules = await getModules();
    res.json({ modules });
  } catch (error) {
    res.status(500).json({ error: "Unable to load modules." });
  }
});

app.get("/api/modules/:id", async (req, res) => {
  try {
    const moduleData = await getModuleById(req.params.id);
    if (!moduleData) {
      return res.status(404).json({ error: "Module not found." });
    }
    res.json({ module: moduleData });
  } catch (error) {
    res.status(500).json({ error: "Unable to load module." });
  }
});

app.get("/api/modules/:id/notes", async (req, res) => {
  try {
    const notes = await getNotesByModule(req.params.id);
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ error: "Unable to load module notes." });
  }
});

app.get("/api/notes", async (req, res) => {
  try {
    const notes = await getAllNotes();
    res.json({ notes });
  } catch (error) {
    res.status(500).json({ error: "Unable to load notes." });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});