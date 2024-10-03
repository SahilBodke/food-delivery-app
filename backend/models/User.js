const mongoose = require('mongoose');

const {Schema} = mongoose;

// Create a user using mongoose
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Export the user (schema) as a model 
module.exports = mongoose.model('user', userSchema)  
