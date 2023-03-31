const UserControllers = require('../controllers/user.controller');

module.exports = app => {
    app.post('/api/user/register', UserControllers.register);
    app.post('/api/user/login', UserControllers.login);
    app.post('/api/user/logout', UserControllers.logout);
}