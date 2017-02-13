'use strict';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'assets/font-awesome/css/font-awesome.min.css';

import 'assets/styles/reset.scss';
import 'assets/styles/base.scss';


import AngularUiRouter from 'angular-ui-router';
import AngularBootstrap from 'angular-ui-bootstrap';
/*Global Paths*/

export default require('angular')
    .module('lazyApp', [
        AngularUiRouter,
        AngularBootstrap,
        (() => {
            require('oclazyload');
            return 'oc.lazyLoad'
        })(),
        (() => {
            require('restangular');
            return 'restangular'
        })(),
       
        require('./modules/common/common').name,
        require('./modules/shared/shared.routing').name,
        require('./modules/dashboard/dashboard.routing').name,
        require('./modules/login/login.routing').name,
        require('./modules/user/user.routing').name
    ])
    .run(['$rootScope', '$location', '$state','Restangular', appRunFn])
    .config(['RestangularProvider', commonConfig])
    .config(['$qProvider', function($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    }]);

function appRunFn($rootScope, $location, $state,Restangular) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        var authenticate = toState.authenticate === false ? false : true;
        //never change from rootscope :)
        $rootScope.isWrapper = authenticate;
        var token = localStorage.getItem("token");
        var check = token ? true : false;
        if (authenticate) {
            if (!check) {
                 $state.go('login');
                event.preventDefault();
               
            }
        } else {
            if (check) {
                $state.go('dashboard');
                event.preventDefault();
                
            }
        }
    });
}

function commonConfig(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://192.168.20.91:8000/');
    RestangularProvider.setDefaultHeaders({
        "authorization": 'Bearer '+localStorage.getItem('Token')
    });
    RestangularProvider.setFullResponse(true);
}
