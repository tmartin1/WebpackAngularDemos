export default angular.module('app.user', [])
    .controller('UserController', require('./user.controller'))
    .config(require('./user.router'));
