// Import base routes for all dashboard modules for lazy loading.
// import {userRoot} from './user/user.router';

// Define base routes for all dashboard modules for lazy loading.
var dbModuleStates = [
    require('./user/user.router').root
];

function lazyRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    angular.forEach(dbModuleStates, (route) => {
        $stateProvider.state(route.name, lazyRouteBuilder(route));
    });

    function lazyRouteBuilder (route) {
        return {
            url: route.url,
            templateProvider: ($q) => {
                return $q((resolve) => {
                    require.ensure([], () => {
                        resolve(require(route.templateUrl));
                    });
                });
            },
            controller: route.controller,
            controllerAs: 'vm',
            resolve: {
                load: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], function () {
                            $ocLazyLoad.load({
                                name: require(route.moduleUrl).name,
                            });
                            resolve();
                        });
                    });
                }
            }
        };
    }
}

export default lazyRoutes;
