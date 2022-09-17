import { Model, UpdateQuery } from 'mongoose';
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
    return this.model.findById(id);
  }

  public async update(id: string, obj: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, obj as UpdateQuery<T>);
  }

  public async delete(_id: string): Promise<T | null> {
    return this.model.findOneAndRemove({ _id });
  }
}
