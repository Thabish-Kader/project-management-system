import mongoose from "mongoose";

export const dbConnect = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI!);
	console.log(`Mongo Connected ---> ${conn.connection.host}`);
};
