const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const service = require('./service');
const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Create the route/method for fetching gallery information
 */
app.get('/fetchGalleryInfo', (req, res) => {
    service.getGalleryInfo(req, res);
});

/**
 * Create service to log end points... to be used for debugging purposes
 */
app.get('/log', (req, res) => {
    console.log(req.query);
    res.send('Done');
});

//Start the server
app.listen(port, () => {
    console.log('Server is running on' + port);
});