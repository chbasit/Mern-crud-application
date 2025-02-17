import register from '../model/userModel.js';

// create a user
export const create=async (req,res)=>{
    try {
        const user= new register(req.body);
        if(!user){
            return res.status(404).json({msg:"user not found"}); 
         }
         const saveUser=await user.save();
         res.status(200).json({msg:"user created successfully"});
    } catch (error) {
         res.status(500).json({error:error});
    }
}

export const getAllUser=async (req,res)=>{
    try{

    
    const user=await register.find();
    if(!user){
        return res.status(404).json({msg:"user not found"});
    }
     res.status(200).json(user);
}catch(error)
{
  return res.status(500).json({error:error});
}
}

export const getOne=async (req,res)=>{
    try {
        const id=req.params.id;
        const user=await register.findById(id);
        if(!user){
            return res.status(404).json({msg:"user not found"});
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({error:error});
    }
}

export const update=async (req,res)=>{
    try{
const id=req.params.id;
const  UserExist=await register.findById(id);
if(!UserExist){
return    res.status(404).json("user not found");
}
const updatedUser=await register.findByIdAndUpdate(id,req.body,{new:true});
 res.status(200).json({msg:"User Update Successfully"});
    }catch(error){
     return res.status(404).json({error:error});
    }
}

export const deleteUser=async (req,res)=>{
    try {
const id=req.params.id;
const  userExist=await register.findById(id);
        if(!userExist){
           return res.status(404).json({msg:"user not exist"});
        }
       const deletedUser= await register.findByIdAndDelete(id); 
        res.status(200).json({msg:"user deleted successfully"});
    } catch (error) {
     return res.status(404).json({error:error});
        
    }

}