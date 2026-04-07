import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Mind Your Code API Running");
});

app.get("/api/status", (req, res) => {
  res.json({ status: "ok", message: "Mind Your Code API running" });
});

app.get("/api/author", (req, res) => {
  res.json({ author: "Created by Samar and the Mind Your Code Team" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});