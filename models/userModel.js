const mongoose=require('mongoose')
const UserSchema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
    // phone:{
    //     type:Number,
    //     required:true
    // }
})

module.exports=mongoose.model('registeredusers',UserSchema);