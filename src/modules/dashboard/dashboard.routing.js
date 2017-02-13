'use strict';

function dashboardRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            views: {          
                'content@': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/dashboard.html')));
                        });
                    }],
                    controller: 'DashboardController as vm'
                }
            },
            resolve: {
                loadHomeController: ['$q', '$ocLazyLoad','loadsharedController', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./dashboard');
                            $ocLazyLoad.load({
                                name: 'dashboard'
                            });
                            resolve(module.controller);
                        });
                    });
                }]
            },
            parent: 'root',
            wrapperClass:'padding-0'
        })
}

export default angular
    .module('dashboard.routing', [])
    .config(['$urlRouterProvider', '$stateProvider', dashboardRouting]);