'use strict';

function sharedRouting($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('root', {
            views: {
                'header': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/header.html')));
                        });
                    }],
                    controller: 'HeaderController as vm'
                },
                'sidebar':{
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/sidebar.html')));
                        });
                    }],
                },
                'footer':{
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => resolve(require('./views/footer.html')));
                        });
                    }],
                },
                'content': ''
            },
            resolve: {
                loadsharedController: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./shared');
                            $ocLazyLoad.load({
                                name: 'shared'
                            });
                            resolve(module.controller);
                        });
                    });
                }]
            }
        })
        
}

export default angular
    .module('shared.routing', [])
    .config(['$urlRouterProvider', '$stateProvider', sharedRouting]);