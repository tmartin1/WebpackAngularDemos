export default angular.module('app.admin', [
        // Add submodules for the admin dashboard here.
        require('./reports/reports.module').name
    ])
    .controller('AdminController', require('./admin.controller'))
    .config(require('./admin.router'));
