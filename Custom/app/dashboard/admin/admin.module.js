export default angular.module('app.admin', [])
    .controller('AdminController', require('./admin.controller'))
    .config(require('./admin.router'));
