// Define this module's root state here.
function adminLazyState ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider.state('admin', {
        url: '/admin',
        templateProvider: ($q) => {
            return $q((resolve) => {
                // bundleName = 'dbmc';
                require.ensure([], () => {
                    resolve(require('./admin.html'));
                }, 'admin-module');
            });
        },
        controller: 'AdminController',
        controllerAs: 'vm',
        resolve: {
            load: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], function () {
                        $ocLazyLoad.load({
                            name: require('./admin.module').name,
                        });
                        resolve();
                    }, 'admin-module');
                });
            }
        }
    });
}

export default adminLazyState;
