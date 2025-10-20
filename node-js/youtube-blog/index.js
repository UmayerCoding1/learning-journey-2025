const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;  

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("home");
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));