var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    picture: {
        url: { type: String, "default": 'image/avatar.png' },
        alt: { type: String, "default": 'Icon made by flaticon.com/authors/nikita-golubev from www.flaticon.com ' }
    }
});

var commmentSchema = new mongoose.Schema({
    author: { type: userSchema, required: true },
    date: Date,
    text: String
});

var eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: Date,
    tags: [String],
    description: { type: String, required: true },
    spotifyTrack: String,
    creator: { type: userSchema, required: true },
    photo: {
        url: { type: String, "default": 'image/default.jpg' },
        alt: { type: String, "default": 'Paul J Everett - Summer Heat Festival' }
    },
    socials: [{
        name: String,
        link: String
    }],
    coords: { type: [Number], index: '2dsphere' },
    comments: [commmentSchema]
});

mongoose.model('Event', eventSchema);
mongoose.model('User', userSchema);