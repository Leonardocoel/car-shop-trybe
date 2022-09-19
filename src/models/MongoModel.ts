import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
import { CustomError, errorCatalog } from '../errors';
import { IModel } from '../interfaces/IModel';

export default abstract class MongoModel<T> implements IModel<T> {
  constructor(
    protected model: Model<T>,
  ) {}

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    return this.model.find({});
  }

  public async readOne(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError(errorCatalog.InvalidMongoId);
    return this.model.findById(id);
  }

  public async update(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError(errorCatalog.InvalidMongoId);
    return this.model.findByIdAndUpdate(id, obj as UpdateQuery<T>);
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new CustomError(errorCatalog.InvalidMongoId);
    return this.model.findOneAndRemove({ id });
  }
}
