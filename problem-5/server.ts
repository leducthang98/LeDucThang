require('dotenv').config();

import express from 'express';
import routers from './src/component/router';
import { errorHandler } from './src/middleware/error-handler';
import bodyParser from 'body-parser';
import { corsMiddleware } from './src/middleware/cors';
import { datasource } from './src/data-source';

// establish database connection
datasource
    .initialize()
    .then(() => {
        console.info("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express();
const port = process.env.APP_PORT;

app.use(corsMiddleware);

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
}));

for (const router of routers) {
    app.use(router.path, router.router)
}

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
