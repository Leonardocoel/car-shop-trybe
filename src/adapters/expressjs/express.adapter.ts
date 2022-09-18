import { Request, Response } from 'express';
import { IController, IRequest, IResponse } from '../../interfaces/IController';

export default class ExpressAdapter {
  static adapt(controller:IController, method: keyof IController) {
    return async (req: Request, res: Response) => {
      const request: IRequest = {
        body: req.body,
        params: req.params,
        query: req.query,
      };
      
      const { status, body }: IResponse = await controller[method](request);
      
      return res.status(status).json(body);
    };
  }
}