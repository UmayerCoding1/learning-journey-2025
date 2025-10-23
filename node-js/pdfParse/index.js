// import { PDFParse } from 'pdf-parse';

// async function run() {
// 	const parser = new PDFParse({ url: 'https://ik.imagekit.io/eg2ws3hdq/Md_Umayer_Hossain__5__a_5J7R8GH.pdf?updatedAt=1760732028711' });

// 	const result = await parser.getText();
// 	console.log(result.text);
// }

// run();

import express from "express";
import path from "path";
import fs from "fs";
import cors from 'cors';
import { PDFParse } from "pdf-parse";
import multer from "multer";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pdf", upload.single("pdf"), async (req, res) => {
  const pdfFile = req.file;
  console.log(pdfFile);
  const parser = new PDFParse({ url: pdfFile.path });

  const result = await parser.getText();
  
res.json({ message: "File uploaded successfully", result: result.text });
 fs.unlinkSync(pdfFile.path);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
