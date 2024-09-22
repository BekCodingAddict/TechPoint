import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conncect = await mongoose.conncect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB has been connected ${conncect.conncection.host}!`);
  } catch (error) {
    console.log(`MongoDB Connection Error: ${error.message}!`);
  }
};

export default connectToDatabase;
