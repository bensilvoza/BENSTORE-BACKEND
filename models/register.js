var mongoose = require("mongoose");

// Register
var registerSchema = new mongoose.Schema({
  email: String,
  password: String,
});
var Register = mongoose.model("Register", registerSchema);

module.exports = Register;
