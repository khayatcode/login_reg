const Movie = require("../models/movie.model");

module.exports = {
    getAllMovies: (req, res) => {
        Movie.find()
            .then(allMovies => res.json({ movies: allMovies }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    },
    createMovie: (req, res) => {
        Movie.create(req.body)
            .then(newMovie => res.json({ movie: newMovie }))
            .catch(err => res.json({ message: "Something went wrong", error: err }));
    }
}

