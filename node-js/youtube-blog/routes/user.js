const {Router} = require("express");
const User = require("../models/User");
const router = Router();
const bcrypt = require('bcryptjs');
const {  cretateTokenForUser } = require("../services/authentication");

router.get("/signin", (req, res) => {
    //  console.log('this is signup route')
   return res.render("signin");
});
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

  
    const user = await User.findOne({ email });
    if (!user) {
      return res.render("signin", { error: "User not found" });
    }

   
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) {
      return res.render("signin", { error: "Incorrect password" });
    }

  
    const token = cretateTokenForUser(user);

   
    res.cookie("youtube_blog_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.redirect("/");
  } catch (error) {
    console.error("Signin Error:", error);
    return res.render("signin", { error: "Something went wrong. Please try again." });
  }
});


router.get("/signup", (req, res) => {
    // console.log('this is signup route')
   return res.render("signup");
});


router.post("/signup", async (req, res) => {
   const {fullname,email,password} = req.body;
   console.log('post')

   await User.create({fullname,email,password});
   return res.redirect("/");
});

module.exports = router;