'use strict';

// Import modules.
import commonModule from './common/common.module';
import loginModule from './login/login.module';
import dashboardModule from './dashboard/dashboard.module';

export default angular
    .module('app', [
        // Modules can also be loaded using require as such:
        // require('./common/common.module').name,
        commonModule.name,
        loginModule.name,
        dashboardModule.name
    ])
    .config(function routerConfig ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    });
