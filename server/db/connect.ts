import {connect} from "mongoose";

const connectDB = ()=>{
    try{
        connect(process.env.MONGO_URI || "mongodb://localhost:27017/")
        console.log("Database connected")
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;