import { z } from 'zod';
import vehicleZodSchema from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number({ required_error: 'doorsQty is required' }).int().min(2).max(4),
  seatsQty: z.number({ required_error: 'seatsQty is required' }).int().min(2).max(7),
});

type ICar = z.infer<typeof carZodSchema>;

interface ICarDTO extends ICar {
  _id: string
}

export default carZodSchema;
export { ICar, ICarDTO };