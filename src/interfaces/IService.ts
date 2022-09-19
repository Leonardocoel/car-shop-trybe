export default interface IService < T > {
  create(obj: unknown): Promise<T>;
  findAll(): Promise<T[]>;
  findCarById(id: string): Promise<T>;
}