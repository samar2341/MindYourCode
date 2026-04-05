import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("Mind Your Code API Running");
});

app.get("/author", (req, res) => {
  res.send("Created by Samar and the Mind Your Code Team");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});