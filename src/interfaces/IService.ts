export default interface IService < T > {
  create(obj: unknown): Promise<T>;
}