// Define this module's substatees here.
function userRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider
        .state('user.settings', {
            url: '/user/settings',
            template: require('./settings/settings.html'),
            controller: 'SettingsController',
            controllerAs: 'vm'
        })
        .state('user.tasks', {
            url: '/user/tasks',
            template: require('./tasks/tasks.html'),
            controller: 'TasksController',
            controllerAs: 'vm'
        });

}

export default userRoutes;
