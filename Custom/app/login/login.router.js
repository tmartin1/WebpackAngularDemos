function loginRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: 'LoginController',
            controllerAs: 'vm'
        })
        .state('user', {
            url: '/user',
            templateProvider: ($q) => {
                var deferred = $q.defer();

                require.ensure([], () => {
                    var template = require('../dashboard/user/user.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
                // require.ensure('./user.html');
            },
            controller: 'UserController',
            // controller: function () {
            //     this.title = 'Test';
            // },
            controllerAs: 'vm',
            resolve: {
                load: ($q, $ocLazyLoad) => {
                    var deferred = $q.defer();

                    require.ensure([], function () {
                        var mod = require('../dashboard/user/user.module');
                        $ocLazyLoad.load({
                            name: 'app.user',
                        });
                        deferred.resolve(mod.controller);
                    });

                    return deferred.promise;
                }
            }
        });
}

export default loginRoutes;
