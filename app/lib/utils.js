import mongoose from "mongoose"

export const connectDB = async () => {
  const connection = { };
  try {
    if (connection.isConnected) {
      console.log('Already connected');
      return;
    }
      
    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState
    console.log(db.connection.host);
  } catch (error) {
    console.log(error);
 
    
  }
}