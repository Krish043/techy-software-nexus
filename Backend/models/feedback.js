const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: String, required: true },
    comments: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const feedbackModel = mongoose.model('Feedback', feedbackSchema);

module.exports = feedbackModel;
