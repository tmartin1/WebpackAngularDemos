// Define this module's substates here.
function adminRoutes ($stateProvider, $ocLazyLoadProvider) {
    'use strict';

    $stateProvider
        .state('admin.reports', {
            url: '/admin/reports',
            template: require('./reports/reports.html'),
            controller: 'ReportsController',
            controllerAs: 'vm'
        });

}

export default adminRoutes;
