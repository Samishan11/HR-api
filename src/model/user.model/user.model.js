const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userModel = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  userRole: String,
  address: String,
  profile_pic: String,
  username: String,
  password: String,
  createdOn: String,
  isAdmin: {
    type: Boolean,
    default: false
  }
});
userModel.methods.matchPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

module.exports = new mongoose.model("user", userModel);