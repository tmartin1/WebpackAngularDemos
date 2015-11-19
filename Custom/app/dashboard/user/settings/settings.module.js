export default angular.module('app.settings', [])
    .controller('SettingsController', require('./settings.controller'))
    .config(require('./settings.router'));
