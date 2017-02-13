'use strict';

// function commonConfig(RestangularProvider) {
//     RestangularProvider.setBaseUrl('http://api.google.com/api');
// }
export default angular
    .module('shared', [
        require('./controllers/shared.controller').name,
        require('./controllers/header.controller').name
    ]);