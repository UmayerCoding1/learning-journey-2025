import express from "express";
import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.get('/video', (req, res) => {
    const videoPath = path.join(__dirname, 'public/video/node1.mp4');
    const videoSize =fs.statSync(videoPath).size;

    const range = req.headers.range;
    if (!range) {
        res.status(400).send("Range not found");
        return;
    }

    const CHUNK_SIZE= 10 ** 6 ;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    const contentLanght = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLanght,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, {start, end});
    videoStream.pipe(res);


})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));