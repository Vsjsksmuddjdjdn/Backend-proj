import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async ()=> {
    try{
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host: ${ConnectionInstance.connection.host}`);

    } catch(err){
        console.log("Error while connecting to the database", err);
        process.exit(1);
    }
}

export default connectDB;