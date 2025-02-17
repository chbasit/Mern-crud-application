import mongoose from 'mongoose'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        require:true,
        type:String

    },
    address:{
        require:true,
        type:String,
        
    }

})
 export default mongoose.model("register",userSchema)
 