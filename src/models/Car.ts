import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({
  doorsQty: Number,
  seatsQty: Number,
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
}, { versionKey: false });

export default class CarModel extends MongoModel<ICar> {
  constructor(
    model = mongooseCreateModel('Car', carMongooseSchema),
  ) {
    super(model);
  }
}