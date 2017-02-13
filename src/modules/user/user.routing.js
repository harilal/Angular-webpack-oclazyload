'use strict';

function userRouting($urlRouterProvider, $stateProvider) {
    $stateProvider
        .state('user', {
            url: '/user',
            views: {
                "content@": {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/profile.html')));
                        });
                    }],
                    controller: 'UserController as userCtrl'
                },
                'sidebar@': ''
            },

            resolve: {
                loadUserController: ['$q', '$ocLazyLoad','loadsharedController', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./user');
                            $ocLazyLoad.load({
                                name: 'user'
                            });
                            resolve(module.controller);
                        });
                    });
                }]

            },
            parent: 'root',
            wrapperClass: 'padding-0'
        })
        
}

export default angular
    .module('user.routing', [])
    .config(['$urlRouterProvider', '$stateProvider', userRouting]);
