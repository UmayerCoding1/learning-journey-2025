const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const userRoute = require("./routes/user");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://youtubeblog:KoPUXYEerX8raZJz@cluster0.ipmfa.mongodb.net/youtube-blog")
  .then((e) => console.log("Mongodb connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
