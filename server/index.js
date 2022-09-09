import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js"
import packetRoutes from "./routes/packets.js"
import periodsRoutes from "./routes/periods.js"
import courseRoutes from "./routes/courses.js"


import dotenv from "dotenv";
const app = express();
import http from 'http';
// import  Server  from 'socket.io';

import { addUser, removeUser, getUser, getUsersInRoom } from './users';


dotenv.config()

app.use(bodyParser.json({limit:"30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
app.use(cors());

app.get("/" , (req ,  res) => {
   res.send("Hello to Youtline API");
});


 app.use("/packets" , packetRoutes)
 app.use("/users" , userRoutes)
 app.use("/periods" , periodsRoutes)
 app.use("/courses" , courseRoutes)



 const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser :true , useUnifiedTopology : true} )
   .then (()=>server.listen(PORT , () => console.log(` Server running on port ${PORT}`)))
   .catch((error) => console.log(error)); 




//  mongoose.set("useFindAndModify" , false)  ; 