var mongoose = require('mongoose')
var passportlocalmongoose = require('passport-local-mongoose')

var UserSchema =new mongoose.Schema({
    username:{type:String, unique:true, required:true},
    idnumber:String,
    email:{type:String, unique:true, required:true},
    securityquestion:String,
    password:String,
    resetPasswordToken:String,
    resetPasswordExpres:Date,
})

UserSchema.plugin(passportlocalmongoose)

module.exports=mongoose.model("User",UserSchema,'users');