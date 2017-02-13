'use strict';

function loginRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                "login": {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/login.html')));
                        });
                    }],
                    controller: 'LoginController as vm'
                }
            },

            resolve: {
                loadLoginController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./login');
                            $ocLazyLoad.load({
                                name: 'login'
                            });
                            resolve(module.controller);
                        });
                    });
                }]

            },
            authenticate: false
        })
        
}

export default angular
    .module('login.routing', [])
    .config(['$urlRouterProvider', '$stateProvider', loginRouting]);