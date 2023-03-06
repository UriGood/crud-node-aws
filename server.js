const express = require('express');

const app = express()

app.get('/', (req,res)=>{
    res.send('Hola mundo con express')
})

app.listen(8080);
console.log('Server on port 3000');