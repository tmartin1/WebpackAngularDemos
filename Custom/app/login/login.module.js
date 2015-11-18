// import LoginController from './login.controller';
// import loginRouter from './login.router';

export default angular.module('app.login', [])
    .controller('LoginController', require('./login.controller'))
    .config(require('./login.router'));
    // .controller('LoginController', LoginController)
    // .config(loginRouter);
