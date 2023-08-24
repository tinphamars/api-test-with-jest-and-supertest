const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The field name is required"],
    minlength: 3,
  },
  email: {
    type: String,
    unique: [true, "The field email is unique"],
    required: [true, "Please provide your email"],
    lowercase: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
