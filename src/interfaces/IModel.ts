export interface IModel<T>{
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(param: string): Promise<T | null>;
  update(param: string, obj: T): Promise<T | null>;
  delete(param: string): Promise<T | null>;
}
