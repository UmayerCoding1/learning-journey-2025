const {Router} = require("express");
const User = require("../models/User");
const router = Router();
const bcrypt = require('bcryptjs');

router.get("/signin", (req, res) => {
    //  console.log('this is signup route')
   return res.render("signin");
});
router.post("/signin",async (req, res) => {
    const {email,password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.send('User not found');
    }

    const isMatchPassword = await bcrypt.compare(password,user.password);
    if(!isMatchPassword){
        return res.send('Password not match');
    }



    res.redirect("/");
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