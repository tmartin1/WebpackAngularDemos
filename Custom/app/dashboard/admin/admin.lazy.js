// Define the module's root state here.
function adminLazyState (lazyStateProvider) {
    'use strict';

    lazyStateProvider.state({
        name: 'admin',
        url: '/admin',
        template: (cb) => {
            require.ensure([], () => {
                cb(require('./admin.html'));
            }, 'admin-module');
        },
        controller: 'AdminController',
        module: (cb) => {
            require.ensure([], () => {
                cb(require('./admin.module').name);
            }, 'admin-module');
        }
    });

    // NOTE: `require.ensure()` automatically creates named chunks with webpack that are loaded on
    // demand. This must be called in this file in order to create an individual named chunk for the
    // admin dashboard module. If `require.ensure` were called in the provider, then it, and every
    // other module that used lazyStateProvider would all be consolidated into the same single chunk
    // (which means they would all load when any one of them is needed).
}

export default adminLazyState;
