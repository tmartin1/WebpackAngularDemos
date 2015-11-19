// // Define base routes for all dashboard modules for lazy loading.
// var dbModuleStates = [
//     require('./user/user.router').root,
//     require('./admin/admin.router').root
// ];
//
// function lazyRoutes ($stateProvider, $ocLazyLoadProvider) {
//     'use strict';
//
//     angular.forEach(dbModuleStates, function (route) {
//         // $stateProvider.state(route.name, lazyRouteBuilder(route));
//         $stateProvider.state(route.name, {
//             url: route.url,
//             templateProvider: ($q) => {
//                 return $q((resolve) => {
//                     // bundleName = 'dbmc';
//                     require.ensure([], () => {
//                         resolve(require(route.templateUrl));
//                     });
//                 });
//             },
//             controller: route.controller,
//             controllerAs: 'vm',
//             resolve: {
//                 load: ($q, $ocLazyLoad) => {
//                     return $q((resolve) => {
//                         require.ensure([], function () {
//                             $ocLazyLoad.load({
//                                 name: require(route.moduleUrl).name,
//                             });
//                             resolve();
//                         });
//                     });
//                 }
//             }
//         });
//     });
// }
//
// export default lazyRoutes;
