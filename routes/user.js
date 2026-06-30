const express = require("express");


const router = express.Router();

//sing e get req korle will have req res  and respond. render  ..render korbo sign in page
router.get("/signin", (req,res) =>{
    return res.render("signin");
});

router.get("/signup", (req,res) =>{
    return res.render("signup");
});


//eikhane frontend theke milbe info 
router.post("/signup", async (req,res) =>{
    const{fullName, email, password} = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect("/")
});



module.exports = router;