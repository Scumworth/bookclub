// models/request.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = new Schema ({
    title: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
    requestedFrom: { type: String, required: true },
    requestedBy: { type: String, required: true }
});

const Request = mongoose.model('Request', RequestSchema);

module.exports = { Request };
