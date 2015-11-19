export default angular.module('app.user', [
        // Add submodules for the user dashboard here.
        require('./tasks/tasks.module').name,
        require('./settings/settings.module').name
    ])
    .controller('UserController', require('./user.controller'))
    .config(require('./user.router'));
