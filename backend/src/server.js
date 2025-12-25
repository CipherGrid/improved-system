import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studentData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "studentData.json"), "utf-8")
);

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/api/report", (req, res) => {
  res.json(studentData);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on PORT: ${PORT}`);
});
