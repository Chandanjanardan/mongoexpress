require ("dotenv").config()
const express = require ("express")
const path= require("path")

const mongoose= require("mongoose")
const app = express();
app.use(express.json())
const PORT=3000;

// connection to database

mongoose.connect(process.env.MONGO_URL)

  



app.get("/",(req,res)=>{
  console.log("hello express")
  res.sendFile(path.resolve("otpless.html"))
  
   
  
})
app.get("/json",(req,res)=>{
  
  res.json({
    message:"This is a json msg"
  })
})

 

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
function otpless(otplessUser) {
  var waName = otplessUser.waName;
  var waNumber = otplessUser.waNumber;
  console.log(waName,waNumber)
  // Signup/signin the user and redirect to next page
  }

app.post("/register",async (req,res)=>{
  const {name,email}=req.body
  console.log(name,email)
  // res.json({
  //   message:"Recieved"
  // })
  let userobj={
    name:name,
    email:email
  }
  let data = await UserModel(userobj).save()
  if(data){
    return res.json({
      message:"data inserted successfully"
    })
  }else{
    return res.json({
      message:"failed"
    })
  }
})

// const UserRouter=require("./routes/UserRoutes")
// app.use("/auth",UserRouter)




app.listen(PORT,()=>{
  console.log(`connection is establisted at port ${PORT}`)
})
