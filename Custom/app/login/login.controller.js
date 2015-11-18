// require.ensure([], function (require) {
//     require('../dashboard/user/user.module');
// }, 'userChunk');
// angular.module('app', [
//     require('../dashboard/user/user.module').name
// ]);

class LoginController {
    constructor ($state) {
        this.$state = $state;
    }

    login (role) {
        if (role === 'admin') {
            // Load admin module then go to admin dashboard.
            this.$state.go('admin');
        } else {
            // require('../dashboard/user/user.module');
            // console.log('angular.module(\'app\')');
            // console.log(angular.module('app'));
            // angular.module('app', [
            //     require('../dashboard/user/user.module').name
            // ]);
            this.$state.go('user');

            // Load user module then go to user dashboard.
            // require.ensure(['../dashboard/user/user.module'], (require) => {
            //     require('../dashboard/user/user.module');
            //     // console.log(item.name);
            //     angular.module('app', ['app.user']);
            //     this.$state.go('user');
            // }, 'userChunk');
        }
    }
}

export default LoginController;
