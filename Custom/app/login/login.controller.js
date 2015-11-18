class LoginController {
    constructor ($state) {
        this.$state = $state;
    }

    login (role) {
        if (role === 'admin') {
            // Load admin module then go to admin dashboard.
            this.$state.go('admin');
        } else {
            // Load user module then go to user dashboard.
            this.$state.go('user');
        }
    }
}

export default LoginController;
