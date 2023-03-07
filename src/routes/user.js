const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user 
router.post('/users',(req,res)=>{
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>{
        res.json({statusCode:201,data});
    })
    .catch((error)=>{
        res.json({statusCode:500,message: error})
    })
});

//get All Users
router.get('/users',(req,res)=>{
    userSchema
    .find()
    .then((data)=>{
        res.json({statusCode:200,data});
    })
    .catch((error)=>{
        res.json({statusCode:500,message: error})
    })
});

//get a user
router.get('/users/:id',(req,res)=>{
    let id = req.params.id
    userSchema
    .findById(id)
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        res.json({message: error})
    })
});

//update a user
router.put('/users/:id',(req,res)=>{
    let id = req.params.id;
    const {userName,date,punchIn,punchOut} = req.body;
    userSchema
    .updateOne({_id:id},{$set:{userName,date,punchIn,punchOut}})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>{
        res.json({message: error})
    })
});

//update a user
router.delete('/users/:id',(req,res)=>{
    const {id} = req.params;
    userSchema
    .deleteOne({_id:id})
    .then((data)=>{
        res.json(data);
        
    })
    .catch((error)=>{
        res.json({message: error})
    })
});

module.exports = router;