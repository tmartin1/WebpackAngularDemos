//
//
//

// 'use strict';
//
// define([], function () {
//
//     var routeResolver = function () {
//
//         this.$get = function () {
//             return this;
//         };
//
//         this.routeConfig = (() => {
//             var viewsDirectory = '/app/dashboard/';
//             var controllersDirectory = '/app/dashboard/';
//
//             function setBaseDirectories (viewsDir, controllersDir) {
//                 viewsDirectory = viewsDir;
//                 controllersDirectory = controllersDir;
//             }
//
//             function getViewsDirectory () {
//                 return viewsDirectory;
//             }
//
//             function getControllersDirectory () {
//                 return controllersDirectory;
//             }
//
//             return {
//                 setBaseDirectories: setBaseDirectories,
//                 getControllersDirectory: getControllersDirectory,
//                 getViewsDirectory: getViewsDirectory
//             };
//         })();
//
//         this.route = ((routeConfig) => {
//
//             function resolve (baseName, path, secure) {
//                 if (!path) {
//                     path = '';
//                 }
//
//                 var routeDef = {};
//                 routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '.html';
//                 routeDef.controller = baseName + 'Controller';
//                 routeDef.secure = (secure) ? secure : false;
//                 routeDef.resolve = {
//                     load: ['$q', '$rootScope', function ($q, $rootScope) {
//                         var dependencies = [routeConfig.getControllersDirectory() + path +
//                             baseName + 'Controller.js'];
//                         return resolveDependencies($q, $rootScope, dependencies);
//                     }]
//                 };
//
//                 return routeDef;
//             }
//
//             resolveDependencies = function ($q, $rootScope, dependencies) {
//                 var defer = $q.defer();
//                 require(dependencies, function () {
//                     defer.resolve();
//                     $rootScope.$apply();
//                 });
//
//                 return defer.promise;
//             };
//
//             return {
//                 resolve: resolve
//             };
//
//         })(this.routeConfig);
//
//     };
//
//     var servicesApp = angular.module('routeResolverServices', []);
//
//     // Must be a provider since it will be injected into module.config()
//     servicesApp.provider('routeResolver', routeResolver);
// });
