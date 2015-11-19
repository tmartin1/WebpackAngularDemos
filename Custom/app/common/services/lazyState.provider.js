import path from 'path';

class lazyStateProvider {
    constructor ($stateProvider, $ocLazyLoadProvider) {
        this.$stateProvider = $stateProvider;
        this.$ocLazyLoadProvider = $ocLazyLoadProvider;
    }

    state (route) {
        let $stateProvider = this.$stateProvider;
        let $ocLazyLoadProvider = this.$ocLazyLoadProvider;

        let options = {
            url: route.url,
            templateProvider: ($q) => {
                return $q((resolve) => {
                    route.template(resolve);
                });
            },
            controller: route.controller,
            controllerAs: route.controllerAs || 'vm',
            resolve: {
                load: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        route.module((moduleName) => {
                            $ocLazyLoad.load({
                                name: moduleName,
                            });
                            resolve();
                        });
                    });
                }
            }
        };

        $stateProvider.state(route.name, options);
    }

    $get () {
        console.log('$get');
        console.log(this);
        return new lazyState();
    }
}

export default lazyStateProvider;
