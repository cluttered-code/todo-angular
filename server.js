'use strict';

const Hapi = require('hapi');
const Hoek = require('hoek');
const Inert = require('inert');

const server = new Hapi.Server();
server.connection({port: 3000});
server.register(Inert, Hoek.ignore());

server.route([
    {
        method: 'GET',
        path: '/',
        handler: {
            file: 'public/index.html'
        }
    }, {
        method: 'GET',
        path: '/{param*}',
        handler: {
            file: 'public/index.html'
        }
    }, {
        method: 'GET',
        path: '/js/{param*}',
        handler: {
            directory: {
                path: 'public/js',
                listing: false,
                index: false
            }
        }
    }, {
        method: 'GET',
        path: '/css/{param*}',
        handler: {
            directory: {
                path: 'public/css',
                listing: false,
                index: false
            }
        }
    }, {
        method: 'GET',
        path: '/views/{param*}',
        handler: {
            directory: {
                path: 'public/views',
                listing: false,
                index: false
            }
        }
    }
]);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});