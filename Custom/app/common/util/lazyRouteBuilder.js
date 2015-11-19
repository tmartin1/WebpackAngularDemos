export default function lazyRouteBuilder (route) {
    return {
        url: route.url,
        templateProvider: ($q) => {
            return $q((resolve) => {
                // bundleName = 'dbmc';
                require.ensure([], () => {
                    resolve(require(route.templateUrl));
                });
            });
        },
        controller: route.controller,
        controllerAs: 'vm',
        resolve: {
            load: ($q, $ocLazyLoad) => {
                return $q((resolve) => {
                    require.ensure([], function () {
                        $ocLazyLoad.load({
                            name: require(route.moduleUrl).name,
                        });
                        resolve();
                    });
                });
            }
        }
    };
};

//
//
//

// import path from 'path';
//
// class lazyRouteBuilder {
//     constructor (route) {
//         this.route = route;
//         this.url = route.url;
//         this.controller = route.controller;
//         this.controllerAs = 'vm';
//         this.resolve = {
//             loadModule: this.loadModule
//         };
//     }
//
//     templateProvider ($q) {
//         let route = this.route;
//         return $q((resolve) => {
//             // bundleName = 'dbmc';
//             require.ensure([], () => {
//                 // resolve(require('../../dashboard/user/user.html'));
//                 resolve(require(route.templateUrl));
//             });
//         });
//     }
//
//     loadModule ($q, $ocLazyLoad) {
//         let route = this.route;
//         return $q((resolve) => {
//             require.ensure([], function () {
//                 $ocLazyLoad.load({
//                     // name: require('../../dashboard/user/user.module.js').name,
//                     name: require(route.moduleUrl).name,
//                 });
//                 resolve();
//             });
//         });
//     }
//
// };
//
// export default lazyRouteBuilder;
