class NavCtrl {
    constructor () {
        this.app = require('./nav.json');
    }
}

export default () => {
    require('./nav.scss');
    return {
        controller: NavCtrl,
        controllerAs: 'nav',
        template: require('./nav.html')
    };
};
