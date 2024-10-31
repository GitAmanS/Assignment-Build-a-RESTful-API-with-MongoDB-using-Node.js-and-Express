// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true, minlength: 2 },
    lastName: { type: String, required: true, minlength: 2 },
    hobby: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
