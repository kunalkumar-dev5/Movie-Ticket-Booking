import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
        throw new Error("MONGODB_URI is not set. Add it to server/.env.");
    }

    mongoose.connection.on('connected', () => console.log("Database connected"));
    await mongoose.connect(`${mongoUri}/quickshow`);
};

export default connectDB;