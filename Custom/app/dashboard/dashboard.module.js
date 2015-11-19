export default angular.module('app.dashboard', [])
    // .config((require('./dashboard.router')));
    .config(require('./user/user.lazy'))
    .config(require('./admin/admin.lazy'));
