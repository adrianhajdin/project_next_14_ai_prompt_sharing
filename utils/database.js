import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  // AI Refactor: Removed `mongoose.set('strictQuery', true)` because mongoose 7.8.x defaults `strictQuery` to true; relying on the default keeps behavior the same and removes redundant configuration (package: mongoose@7.8.10, opportunity: Mongoose 7 strictQuery default).
  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}
