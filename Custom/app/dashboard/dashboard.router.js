// Define base routes for all dashboard modules for lazy loading.
var dbModuleStates = [{
    name: 'user',
    url: '/user',
    templateUrl: require('./user/user.html'),
    controller: 'UserController',
    module: 'app.user',
    moduleUrl: require('./user/user.module')
}];

function lazyRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    angular.forEach(dbModuleStates, (route) => {
        $stateProvider.state(route.name, lazyRouteBuilder(route));
    });

    function lazyRouteBuilder (route) {
        return {
            url: route.url,
            templateProvider: ($q) => {
                var deferred = $q.defer();

                require.ensure([], () => {
                    var template = route.templateUrl;
                    deferred.resolve(template);
                });
                return deferred.promise;
            },
            controller: route.controller,
            controllerAs: 'vm',
            resolve: {
                load: ($q, $ocLazyLoad) => {
                    var deferred = $q.defer();

                    require.ensure([], function () {
                        var mod = route.moduleUrl;
                        $ocLazyLoad.load({
                            name: route.module,
                        });
                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }
            }
        };
    }
}

export default lazyRoutes;
