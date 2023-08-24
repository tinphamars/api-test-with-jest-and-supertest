const mongoose = require("mongoose");

const JestSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: [true, "The field email is unique"],
    required: [true, "Please provide your email"],
  },
});

const Jest = mongoose.model("Jest", JestSchema);
module.exports = Jest;
