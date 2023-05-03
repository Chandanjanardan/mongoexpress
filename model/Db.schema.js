const mongoose= require("mongoose")
const Schema= mongoose.Schema;
const UserSchema=new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  }
})
const UserModel=mongoose.model("User",UserSchema)

module.exports=UserModel