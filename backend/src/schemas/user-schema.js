import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is required"]
   },
   username: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "THIS EMAIL IS REGISTERED"]
   },
   active: {
      type: Boolean,
      required: [true, "active is required"]
   },
   role: {
      type: String,
      required: [true, "role is required"]
   },
}, {versionKey: false})

const userModel = mongoose.model("user", userSchema)

export default userModel