//this imports express 
const express = require('express');

//Use dotenv to expose our environment variables
require('dotenv').config();

//We create a new instance of express as the app object
const app = express();
//PORT assignment
const PORT = process.env.PORT;

//route handler that will define uri/url that does something
app.get('/home',(req,res) =>{
    res.send('Hello,world!');
});


//Start our server
app.listen(PORT, () =>{
   console.log(`Server started on port: ${PORT}`); 
});