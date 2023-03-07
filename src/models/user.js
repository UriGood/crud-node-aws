const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    punchIn:{
        type: String,
        required: true
    },
    punchOut:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('User', userSchema);