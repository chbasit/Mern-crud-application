import express from 'express';
import {create,getAllUser,getOne,update,deleteUser }from '../controller/userController.js';

const route=express.Router();
route.post('/create', create);
route.get('/getAll',getAllUser);
route.get('/getOne/:id',getOne); 
route.put('/update/:id',update);
route.delete("/delete/:id",deleteUser);


export default route
