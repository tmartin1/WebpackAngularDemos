export default angular.module('app.service', [])
    .provider('lazyStateProvider', require('./lazyState.provider'));
    // .provider('routeResolverProvider', require('./routeResolver.provider'));
