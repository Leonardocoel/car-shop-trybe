import { ICarDTO } from '../interfaces/ICar';
import { IController, IRequest, IResponse } from '../interfaces/IController';
import IService from '../interfaces/IService';

export default class CarController implements IController {
  constructor(
    private carService: IService<ICarDTO>,
  ) {}

  async create(req: IRequest): Promise<IResponse> {
    const carProps = req.body;

    const newCar = await this.carService.create(carProps);

    return {
      status: 201,
      body: newCar,
    };
  }
}