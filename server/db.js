import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conncect = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB has been connected ${conncect.connection.host}!`);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error.message}!`);
  }
};

export default connectToDatabase;
