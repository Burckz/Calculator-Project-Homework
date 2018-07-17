const homeController = require('./../controllers/home');
const Calculator = require('../models/Calculator');

module.exports = (app) => {
    app.get('/', homeController.indexGet);
    app.post('/', homeController.indexPost);
};

