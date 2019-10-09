module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    // Create a new User
    app.post('/user', notes.create);

    // Retrieve all Users
    app.get('/user/login', notes.findOne);

   


}