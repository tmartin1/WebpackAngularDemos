export default angular.module('app.dashboard', [])
    .config(require('./user/user.lazy'))
    .config(require('./admin/admin.lazy'));
