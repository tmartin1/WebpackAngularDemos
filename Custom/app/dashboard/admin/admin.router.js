// export const adminRoot = {
//     name: 'admin',
//     url: '/admin',
//     templateUrl: './admin/admin.html',
//     controller: 'AdminController',
//     module: 'app.admin',
//     moduleUrl: './admin/admin.module'
// };

// Define this module's subroutes here.
function adminRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    // $stateProvider
    //     .state('admin', {
    //         url: '/admin',
    //         template: require('./admin.html'),
    //         controller: 'AdminController',
    //         controllerAs: 'vm'
    //     });

}

// Define root route here.
adminRoutes.root = {
    name: 'admin',
    url: '/admin',
    templateUrl: './admin/admin.html',
    controller: 'AdminController',
    module: 'app.admin',
    moduleUrl: './admin/admin.module'
};

export default adminRoutes;
