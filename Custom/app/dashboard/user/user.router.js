// export const userRoot = {
//     name: 'user',
//     url: '/user',
//     templateUrl: './user/user.html',
//     controller: 'UserController',
//     module: 'app.user',
//     moduleUrl: './user/user.module'
// };

// Define this module's subroutes here.
function userRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    // $stateProvider
    //     .state('user', {
    //         url: '/user',
    //         template: require('./user.html'),
    //         controller: 'UserController',
    //         controllerAs: 'vm'
    //     });

}

// Define root route here.
userRoutes.root = {
    name: 'user',
    url: '/user',
    templateUrl: './user/user.html',
    controller: 'UserController',
    module: 'app.user',
    moduleUrl: './user/user.module'
};

export default userRoutes;
