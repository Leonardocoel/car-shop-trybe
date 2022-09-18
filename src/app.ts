import express from 'express';
import 'express-async-errors';
import errorMidleware from './middlewares/error.middleware';
import { carsRouter } from './routes';

const app = express();
app.use(express.json());
app.use('/cars', carsRouter);
app.use(errorMidleware);

export default app;
