const MovieController = require('../controllers/movie.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.get('/api/movies', authenticate, MovieController.getAllMovies);
    app.post('/api/movies', MovieController.createMovie);
}
