import { CustomError, errorCatalog } from '../errors';
import carZodSchema, { ICar, ICarDTO } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class CarsService implements IService<ICar> {
  constructor(
    private carModel: IModel<ICar>,
  ) {}
  
  public async create(obj: ICar): Promise<ICarDTO> {
    if (Object.keys(obj).length < 1) throw new CustomError(errorCatalog.Empty);
    const parsed = carZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return await this.carModel.create(parsed.data) as ICarDTO;
  }

  public async findAll(): Promise<ICarDTO[]> {
    return await this.carModel.read() as ICarDTO[];
  }

  public async findCarById(id: string): Promise<ICarDTO> {
    const car = await this.carModel.readOne(id) as ICarDTO;
    
    if (!car) throw new CustomError(errorCatalog.NotFound);

    return car;
  }

  public async updateCarById(id: string, obj: ICar): Promise<ICarDTO> {
    if (Object.keys(obj).length < 1) throw new CustomError(errorCatalog.Empty);

    const updatedCar = await this.carModel.update(id, obj);

    if (!updatedCar) throw new CustomError(errorCatalog.NotFound);

    return updatedCar as ICarDTO;
  }

  public async deleteCarById(id: string): Promise<void> {
    const deletedCar = await this.carModel.delete(id);

    if (!deletedCar) throw new CustomError(errorCatalog.NotFound);
  }
}
