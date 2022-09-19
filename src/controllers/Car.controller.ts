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

  async findAll(): Promise<IResponse> {
    const allCars = await this.carService.findAll();

    return {
      status: 200,
      body: allCars,
    };
  }

  async findById(req: IRequest): Promise<IResponse> {
    const { id } = req.params as IRequest & { id: string };

    const car = await this.carService.findCarById(id);

    return {
      status: 200,
      body: car,
    };
  }

  async updateById(req: IRequest): Promise<IResponse> {
    const { id } = req.params as IRequest & { id: string };
    const carInfo = req.body;

    const updatedCar = await this.carService.updateCarById(id, carInfo);

    return {
      status: 200,
      body: updatedCar,
    };
  }

  async deleteById(req: IRequest): Promise<IResponse> {
    const { id } = req.params as IRequest & { id: string };
    const carInfo = req.body;

    await this.carService.updateCarById(id, carInfo);

    return {
      status: 204,
      body: {},
    };
  }
}