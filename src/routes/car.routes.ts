import { Router } from 'express';
import ExpressAdapter from '../adapters/expressjs/express.adapter';
import CarControllerFactory from '../factories/CarController.factory';

const router = Router();
const carController = CarControllerFactory.make();

router.post('/', ExpressAdapter.adapt(carController, 'create'));

export default router;