// Define application routes.
import express from 'express';
import {path} from './config';

function routes (app) {
    'use strict';

    app.route('/api/login')
        .get(function (req, res) {
            // Send login request to FlexAPI.
            // Get authentication level as response.
            // Determine dashboard config (what modules are needed) based on auth level.
            // res.send the appropriate dashboard.
        });

    app.route('/app/*')
        .get(function (req, res) {
            if (req.path.match('app/index.')) {
                res.sendFile(process.cwd() + path.root + req.path);
            } else {
                res.sendFile(process.cwd() + path.partials + req.path);
            }
        });

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
            res.sendFile(process.cwd() + path.root + '/index.html');
        });
}

export default routes;
