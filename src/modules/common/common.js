'use strict';

// function commonConfig(RestangularProvider) {
//     RestangularProvider.setBaseUrl('http://api.google.com/api');
// }
export default angular
    .module('common', [
        require('./services/common.service').name,
        require('./services/api.service').name,
        require('./directives/common.example.directive').name,
        require('./filter/common.trim.filter').name,
        require('./factory/common.interceptor.factory').name
    ]);