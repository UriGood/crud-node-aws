const express = require('express')

const app = express();
const port = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send('Welcome to my API')
})

app.listen(8080,()=>{
    console.log("Server listening on port", port);
});