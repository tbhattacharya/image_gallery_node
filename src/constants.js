module.exports = {
    BASEURL: 'https://api.flickr.com/services/rest',
    REQ_VALUES: {
        METHOD_GALLERY: 'flickr.galleries.getPhotos',
        API_KEY: '3d16348181e8da69a143d1d74f1848d7',
        FORMAT: 'json',
        METHOD_PROFILE: 'flickr.profile.getProfile',
        METHOD_PHOTO: 'flickr.photos.getInfo'
    },
    ErrorRespose: {
        'status': 'FAILURE'
    },
    SuccessResponse: {
        'status': 'SUCCESS'
    }
}