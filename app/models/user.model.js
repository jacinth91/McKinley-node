const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    mobilenumber: Number,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);