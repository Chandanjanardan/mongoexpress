const express= require("express")


const UserRouter=express.Router();
const {registerController}=require("../controller/UserController")

UserRouter.post("/register",registerController);

module.exports=UserRouter