import { Router } from 'express';
import ExpressAdapter from '../adapters/expressjs/express.adapter';
import CarControllerFactory from '../factories/CarController.factory';

const router = Router();
const carController = CarControllerFactory.make();

router.post('/', ExpressAdapter.adapt(carController, 'create'));
router.get('/', ExpressAdapter.adapt(carController, 'findAll'));
router.get('/:id', ExpressAdapter.adapt(carController, 'findById'));

export default router;