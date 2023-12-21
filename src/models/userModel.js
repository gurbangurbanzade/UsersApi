const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    // _id: mongoose.Schema.ObjectId,
    id: String,
    name: String,
    age: Number,
  },
  { collection: "Users", timestamps: false }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
