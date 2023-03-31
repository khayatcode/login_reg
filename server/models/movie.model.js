const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required"],
        minlength: [2, "Genre must be at least 2 characters long"]
    },
    year: {
        type: Number,
        required: [true, "Year is required"],
        minlength: [4, "Year must be at least 4 characters long"]
    },
}, { timestamps: true });

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;