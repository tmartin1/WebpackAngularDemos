// Define this module's root state here.
function userLazyState ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider.state('user', {
        url: '/user',
        templateProvider: ($q) => {
            return $q((resolve) => {
                // bundleName = 'dbmc';
                require.ensure([], () => {
                    resolve(require('./user.html'));
                }, 'user-module');
            });
        },
        controller: 'UserController',
        controllerAs: 'vm',
        resolve: {
            load: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], function () {
                        $ocLazyLoad.load({
                            name: require('./user.module').name,
                        });
                        resolve();
                    }, 'user-module');
                });
            }
        }
    });
}

export default userLazyState;
