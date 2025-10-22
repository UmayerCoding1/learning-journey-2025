import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use("/public", express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  try {
    console.log(req.body);
    // console.log(req.files);
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error uploading file");
  }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
