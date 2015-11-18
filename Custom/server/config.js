// Configuration data.
var config = {};

export const server = {
    port: process.env.port || '8080',
    host: process.env.host || 'localhost'
};

export const path = {
    development: {
        root: '/.tmp/serve',
        partials: '/client'
    },
    dist: {
        root: '/dist',
        partials: '/dist'
    }
}[process.env.NODE_ENV || 'development'];
