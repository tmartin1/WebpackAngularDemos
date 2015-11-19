// export const settingsRoot = {
//     name: 'settings',
//     url: '/settings',
//     templateUrl: './settings/settings.html',
//     controller: 'SettingsController',
//     module: 'app.settings',
//     moduleUrl: './settings/settings.module'
// };

// Define this module's subroutes here.
function settingsRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    // $stateProvider
    //     .state('settings', {
    //         url: '/settings',
    //         template: require('./settings.html'),
    //         controller: 'SettingsController',
    //         controllerAs: 'vm'
    //     });

}

// Define root route here.
settingsRoutes.root = {
    name: 'settings',
    url: '/settings',
    templateUrl: './settings/settings.html',
    controller: 'SettingsController',
    module: 'app.settings',
    moduleUrl: './settings/settings.module'
};

export default settingsRoutes;
