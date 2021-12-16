import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { StartFetchingProcess } from './fetchingData';

import { DATA_1 } from './aviationstack/RESPONSE_DATA_MOCK';
import {
    connectToDB,
    addAirlineItemToTable,
    getCurrentAirline,
    getCurrAirplane,
    addAirplaneItemToTable,
} from './dbActions';

dotenv.config();
const PORT = process.env.SERVER_PORT || 8080;

console.clear();

connectToDB().then((dbClient) => {
    const app = express();

    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    );

    app.get('/qwerty', (_req, res) => {
        console.log('biba');

        setTimeout(() => {
            res.send({ biba: 213 });
        }, 1500);
    });

    console.log(`⚡️[server]: Try to start server`);

    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);

        StartFetchingProcess(dbClient);
    });
});
