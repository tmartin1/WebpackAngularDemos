import directivesModule from './directives/directives.module';
import servicesModule from './services/services.module';

export default angular.module('app.common', [
    'lumx',
    'ui.router',
    'oc.lazyLoad',
    servicesModule.name,
    directivesModule.name
]);
