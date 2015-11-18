'use strict';

// Import modules.
import directivesModule from './common/directives.module';
import loginModule from './login/login.module';
import dashboardModule from './dashboard/dashboard.module';

export default angular
    .module('app', [
        'lumx',
        'ui.router',
        'oc.lazyLoad',
        /* Load modules */
        // Modules can also be loaded using require as such:
        // require('./common/directives.module').name,
        directivesModule.name,
        loginModule.name,
        dashboardModule.name
    ])
    .config(function routerConfig ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    });
