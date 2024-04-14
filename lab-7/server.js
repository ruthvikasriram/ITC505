const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Serve static files from the 'public' folder
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Handle POST request for the mad lib form
server.post('/ITC505/lab-7/index.html', (req, res) => {
    const { pluralNoun, adjective, verb, noun, adverb } = req.body;
    const madLib = `The ${adjective} ${pluralNoun} ${verb} over the ${noun} ${adverb}.`;
    res.send(madLib);
});

// Set the port
let port = 80;
if (process.argv[2] === 'local') {
    port = 8080;
}
server.listen(port, () => console.log('Ready on localhost!'));
