/* GET home page */

class MainController {
  constructor() {
  }

  index(req, res) {
    res.render('index', { title: 'Express' });
  }

}

module.exports = MainController;

