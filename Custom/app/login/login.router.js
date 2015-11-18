function loginRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./login.html'),
            controller: 'LoginController',
            controllerAs: 'vm'
        });
}

export default loginRoutes;
