class LocationsController {

    homeList(req, res) {
        res.render('events-list', { title: 'Home' });
    }

    eventInfo(req, res) {
        res.render('event-info', { title: 'Event Info' });
    }

    newReview(req, res) {
        res.render('event-comment-form', { title: 'Add Comment' });
    }
}

module.exports = LocationsController;