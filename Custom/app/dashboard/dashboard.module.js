var dashboardModule = 'app.dashboard';

export default angular.module(dashboardModule, [])
    .config(require('./dashboard.router'));
