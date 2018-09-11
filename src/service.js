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
    method: Constants.REQ_VALUES.METHOD_GALLERY,
    api_key: Constants.REQ_VALUES.API_KEY,
    get_gallery_info: true,
    format: Constants.REQ_VALUES.FORMAT,
    nojsoncallback: 1
}

const profileQs = {
    method: Constants.REQ_VALUES.METHOD_PROFILE,
    api_key: Constants.REQ_VALUES.API_KEY,
    format: Constants.REQ_VALUES.FORMAT,
    nojsoncallback: 1
}

const photoQs = {
    method: Constants.REQ_VALUES.METHOD_PHOTO,
    api_key: Constants.REQ_VALUES.API_KEY,
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
                //res.send({ ...Constants.SuccessResponse, data:JSON.parse(body) });
                const resp = JSON.parse(body);
                request({
                    ...options,
                    qs: {
                        ...profileQs,
                        user_id: resp.gallery.owner
                    }
                },
                    (error, response, body) => {
                        if (error) {
                            //return error with status 'FAILURE' for front end
                            return res.send({ ...Constants.ErrorRespose, error });
                        }
                        resp.gallery.owner_name = JSON.parse(body).profile.first_name + ' ' + JSON.parse(body).profile.last_name
                        res.send({ ...Constants.SuccessResponse, data: resp });
                    }
                )
            });
    },
    getPhotoInfo: (req, res) => {
        //Recontruct the query string using constants defined and gallery_id from req
        request(
            {
                ...options,
                qs: {
                    ...photoQs,
                    photo_id: req.query.photo_id,
                    secret: req.query.secret
                }
            },
            (error, response, body) => {
                if (error) {
                    //return error with status 'FAILURE' for front end
                    return res.send({ ...Constants.ErrorRespose, error });
                }
                //return data with status 'SUCCESS' for front end
                res.send({ ...Constants.SuccessResponse, data: JSON.parse(body) });
            });
    }
};