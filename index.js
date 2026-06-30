
const path = require("path");
const express = require("express");

const userRoute = require('./routes/user')




const app = express();
const PORT = 8000;


//এটি সার্ভার থেকে HTML page dynamicভাবে তৈরি করতে ব্যবহার করা হয়।
app.set("view engine","ejs")
app.set("views",path.resolve("./views"));

 app.get("/",(req,res) =>{
    res.render("home")
 });


 app.use("/user",userRoute);

app.listen(PORT,() => console.log(`server started at port: ${PORT}`));