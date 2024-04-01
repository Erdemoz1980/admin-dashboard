import mongoose from "mongoose"

const connection = {};

export const connectDB = async () => {

  try {
    if (connection.isConnected) {
      console.log(`Already connected to ${connection.host}`)
      return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);
    connection.isConnected = db.connections[0].readyState;
    connection.host = db.connection.host
    console.log(db.connection.host);
    
  } catch (error) {
    console.log(error);
    
  }
};