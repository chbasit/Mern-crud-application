import express from 'express'; 
import { mongoose } from 'mongoose';
import bodyParser from 'body-parser';
import  dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';


const app = express();
app.use(bodyParser.json()); 
app.use(cors());
dotenv.config();



const PORT = process.env.PORT|| 3000; 
const URL=process.env.DatabaseUrl;


mongoose.connect(URL).then(()=>{
    console.log("connected database successfully");
}).catch(error=> console.log(error))


app.listen(PORT,()=>{
console.log(`server listen at ${PORT}`)
})


app.use('/api',route)