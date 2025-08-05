//require the express package
const express = require('express');
//initialize a instance of express
const app = express();
//assign a port
const PORT = 3000;

//route handler
app.get('/', (req,res) => {
    res.send("Hello, World!");

});




//create our server
app.listen(PORT, ()=>{
    console.log(`Connected on port ${PORT}`);
});
