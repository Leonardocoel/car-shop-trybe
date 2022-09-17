import { z } from 'zod';

const vehicleZodSchema = z.object({
  model: z.string({ required_error: 'model is required' }).min(3),
  year: z.number({ required_error: 'year is required' }).int().min(1900).max(2022),
  color: z.string({ required_error: 'color is required' }).min(3),
  status: z.boolean().optional(),
  buyValue: z.number({ required_error: 'buyValue is required' }).int(),
});

type IVehicle = z.infer<typeof vehicleZodSchema>;

export default vehicleZodSchema;
export { IVehicle };
