import mongoose from "mongoose";
const DB = process.env.DB_HOST;

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(DB!);
  console.info("DB_Connected");
} catch (e) {
  console.info(e);
}

export default mongoose;
