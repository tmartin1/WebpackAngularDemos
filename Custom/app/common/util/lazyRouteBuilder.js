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
