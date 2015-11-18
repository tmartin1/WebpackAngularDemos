// Vendor dependencies.

module.exports = [
    // JS
    'jquery',
    'velocity-animate',
    'angular',
    'ui-router',
    'moment',
    'node-lumx',

    // Styles
    nodeModule('mdi/css/materialdesignicons.min.css'),
    nodeModule('node-lumx/dist/scss/_lumx.scss'),
    '../app/index.scss'
];

function nodeModule (path) {
    return '../node_modules/' + path;
}
