import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car';
import CarsService from '../services/Car.service';

export default class CarControllerFactory {
  static make() {
    const carModel = new CarModel();
    const carService = new CarsService(carModel);
    const carController = new CarController(carService);

    return carController;
  }
}