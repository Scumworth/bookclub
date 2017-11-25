// models/user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userName: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    city: { type: String },
    state: { type: String },
    books: [{title: { type: String }, thumbnail: { type: String }}] 
});

const User = mongoose.model('User', UserSchema);

module.exports = { User };
