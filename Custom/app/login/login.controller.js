class LoginController {
    constructor ($state) {
        this.$state = $state;
    }

    login (role) {
        if (role === 'admin') {
            this.$state.go('admin'); // Admin module loaded before state resolves.
        } else {
            this.$state.go('user'); // User module loaded before state resolves.
        }
    }
}

export default LoginController;
