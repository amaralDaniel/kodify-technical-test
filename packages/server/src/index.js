const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 30001;

const { videoController } = require('./controllers/video');

app.use(function setHeaders(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.get('/video/:videoId', videoController);

function startServer() {
    mongoose.connect('mongodb://localhost/db');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connected');
        // we're connected!
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
}

startServer();