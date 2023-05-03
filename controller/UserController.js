const UserModel=require("../model/Db.schema")
const registerController=async (req,res)=>{
    const {name,email}=req.body
    console.log(name,email)
    // res.json({
    //   message:"Recieved"
    // })
    let userobj={
      name:name,
      email:email
    }
    try{
    let data = await UserModel(userobj).save()
    if(data){
      return res.json({
        message:"data inserted successfully"
      })
    }
    else{
      return res.json({
        message:"failed"
      })}
    }
    catch(error){
        return res.json({
            message:"error in file"
        })

    }
  }

  module.exports=registerController;