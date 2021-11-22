const express = require("express");

// start express
const app = express();

// expose public folder
app.use(express.static('public'));

app.listen(3000);



app.get("/hello",(recObj,resObj) => {
    console.log("hello")
    resObj.send("bye")
} )

