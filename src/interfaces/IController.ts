export type IRequest = {
  body: object,
  params: object,
  query: object,
};

export type IResponse = {
  status: number,
  body: object,
};

export interface IController {
  create(req: IRequest): Promise<IResponse>;
  findAll(): Promise<IResponse>;
  findById(req: IRequest): Promise<IResponse>;
  updateById(req: IRequest): Promise<IResponse>;
}