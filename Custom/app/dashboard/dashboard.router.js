import lazyRouteBuilder from '../common/util/lazyRouteBuilder';

// Import base routes for all dashboard modules for lazy loading.
// import {userRoot} from './user/user.router';

// Define base routes for all dashboard modules for lazy loading.
var dbModuleStates = [
    require('./user/user.router').root,
    require('./admin/admin.router').root
];

function lazyRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    var bundleName = 'dbmc';
    angular.forEach(dbModuleStates, function (route) {
        $stateProvider.state(route.name, lazyRouteBuilder(route));
    });

}

export default lazyRoutes;
