const request = require('request');
const Constants = require('./constants');

/**
 * As one of the query parameters will be part of the req
 * define constants separately and reconstruct query parameter
 */
const options = {
    url: Constants.BASEURL,
    method: 'GET'
};

//Constants in the query parameter
const qs = {
    method: Constants.REQ_VALUES.METHOD,
    api_key: Constants.REQ_VALUES.API_KEY,
    get_gallery_info: true,
    format: Constants.REQ_VALUES.FORMAT,
    nojsoncallback: 1
}
module.exports = {
    getGalleryInfo: (req, res) => {
        //Recontruct the query string using constants defined and gallery_id from req
        request(
            {
                ...options,
                qs: {
                    ...qs,
                    gallery_id: req.query.gallery_id
                }
            },
            (error, response, body) => {
                if (error) {
                    //return error with status 'FAILURE' for front end
                    return res.send({ ...Constants.ErrorRespose, error });
                }
                //return data with status 'SUCCESS' for front end
                res.send({ ...Constants.SuccessResponse, data:JSON.parse(body) });
            });
    }
};