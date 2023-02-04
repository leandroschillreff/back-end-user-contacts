import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import handleErrorMiddleware from './middlewares/handleError.middleware';
import { initializerRouter } from './routes';

const app = express();

app.use(express.json());

initializerRouter(app);

app.use(handleErrorMiddleware);

export default app;
