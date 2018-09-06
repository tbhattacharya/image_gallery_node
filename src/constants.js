module.exports = {
    BASEURL: 'https://api.flickr.com/services/rest',
    REQ_VALUES: {
        METHOD: 'flickr.galleries.getPhotos',
        API_KEY: '39289096ddf5e480830e31c0224562fd',
        FORMAT: 'json'
    },
    ErrorRespose: {
        'status': 'FAILURE'
    },
    SuccessResponse: {
        'status': 'SUCCESS'
    }
}