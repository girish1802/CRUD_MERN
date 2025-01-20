import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
