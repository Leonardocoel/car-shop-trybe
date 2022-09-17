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
}
