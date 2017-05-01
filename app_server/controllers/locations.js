class LocationsController {

    homeList(req, res) {
        res.render('events-list', {
            title: 'Musiq | Find indie events near you!',
            pageHeader: {
                title: 'Musiq',
                strapline: 'Find indie events near you!'
            },
            events: [
                {
                    photo: {
                        url: 'image/forro.jpg',
                        alt: 'Maestro Forró e Orquestra Popular da Bomba do Hemetério',
                    },
                    name: 'Forró Concert',
                    address: '8825 Beatty Plaza',
                    distance: '122km',
                    date: {
                        year: '2017',
                        month: 'DEC',
                        day: '27'
                    },
                    tags: [
                        'forro',
                        'folk',
                        'brazil'
                    ]
                },
                {
                    photo: {
                        url: 'image/rock.jpg',
                        alt: 'Maestro Forró e Orquestra Popular da Bomba do Hemetério',
                    },
                    name: 'Punk Rock Concert',
                    address: '6785 Emmie Hollow',
                    distance: '185m',
                    date: {
                        year: '2017',
                        month: 'FEB',
                        day: '8'
                    },
                    tags: [
                        'rock',
                        'punk'
                    ]
                }
            ]
        });
    }

    eventInfo(req, res) {
        res.render('event-info', {
            event:
            {
                photo: {
                    url: 'image/forro.jpg',
                    alt: 'Maestro Forró e Orquestra Popular da Bomba do Hemetério',
                },
                name: 'Forró Concert',
                address: '8825 Beatty Plaza',
                distance: '122km',
                spotifyTrack: '2TpxZ7JUBn3uw46aR7qd6V',
                date: {
                    start: '2017',
                    end: '',
                },
                tags: [
                    'forro',
                    'folk',
                    'brazil'
                ],
                creator: {
                    name: 'Delia Boehm',
                    thumbnail: 'https://s3.amazonaws.com/uifaces/faces/twitter/anoff/128.jpg',
                    link: 'http://jayde.name'
                },
                location: {
                    lat: '1.60975',
                    lon: '114.44038',
                    link: 'https://www.google.com.br/maps/@-7.1515399,-34.8093935,16z'
                },
                socials: [
                    {
                        name: 'twitter',
                        link: 'http://pamela.biz'
                    },
                    {
                        name: 'facebook',
                        link: 'https://kayley.net'
                    },
                    {
                        name: 'instagram',
                        link: 'http://lonie.name'
                    }
                ],
                description: 'Doloribus sunt vero aut non assumenda esse. Ipsum atque inventore vero ut magni occaecati excepturi architecto dolor. In et cum est omnis provident est quia. Iure adipisci assumenda praesentium iusto qui. Animi optio fugiat et quos. Aut labore quidem enim animi quo ut blanditiis eius corporis. Eos ad itaque voluptas culpa fugiat aperiam. Aliquid earum quis suscipit. Nobis minus ut aspernatur quis deserunt autem. Vel omnis rerum occaecati ea ut fugit. Qui dignissimos perspiciatis ipsum ipsa possimus est quia. Velit ea voluptas earum quam cupiditate veniam deleniti eum. Qui inventore numquam dolor cum quam. Voluptas autem vitae.',
                comments: [
                    {
                        author: 'Hester Rutherford',
                        date: '20 July 2017',
                        body: 'Nisi labore neque voluptatem. Tenetur molestias rerum sequi eveniet. Est fugit nam doloribus nihil error. Sit voluptatem assumenda quo est. Sed repellendus rerum ab modi. Suscipit autem reiciendis esse quod architecto ut illum et aut.Ut aliquid architecto perferendis ut illo ipsum. Sed unde nisi veniam. Perspiciatis ea debitis nihil voluptatem aut deleniti ad dolore. Quasi ut corrupti ipsa. Totam placeat culpa ratione enim quos suscipit et et. Esse possimus quibusdam voluptas laudantium mollitia.'
                    },
                    {
                        author: 'Alexis Cruickshank',
                        date: '30 April 2017',
                        body: ' Sed unde nisi veniam. Nisi labore neque voluptatem. Tenetur molestias rerum sequi eveniet. Est fugit nam doloribus nihil error. Sit voluptatem assumenda quo est. Sed repellendus rerum ab modi. Suscipit autem reiciendis esse quod architecto ut illum et aut.Ut aliquid architecto perferendis ut illo ipsum. Perspiciatis ea debitis nihil voluptatem aut deleniti ad dolore. Quasi ut corrupti ipsa. Totam placeat culpa ratione enim quos suscipit et et. Esse possimus quibusdam voluptas laudantium mollitia.'
                    }
                ]

            }
        });
    }

    newReview(req, res) {
        res.render('event-comment-form', { title: 'Add Comment' });
    }
}

module.exports = LocationsController;