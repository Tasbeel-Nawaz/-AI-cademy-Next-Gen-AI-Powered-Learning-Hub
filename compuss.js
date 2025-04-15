const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});

const messageschema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const studentmodel = mongoose.model('Student', studentschema);
const studentmessage = mongoose.model('Message', messageschema);

module.exports = {
  studentmodel,
  studentmessage
};
