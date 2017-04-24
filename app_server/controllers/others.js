class OthersController {

    about(req, res) {
        res.render('about', { title: 'About' });
    }
}

module.exports = OthersController;