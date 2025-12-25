import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const studentData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "studentData.json"), "utf-8")
);

const corsOptions = {
  origin: [process.env.CLIENT_URL || "http://localhost:5173"],
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.get("/api/report", (req, res) => {
  res.json(studentData);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
