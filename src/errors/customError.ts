import { ErrorResponseObject } from './catalog';

export default class CustomError extends Error {
  public readonly httpStatus;

  constructor({ error, httpStatus }: ErrorResponseObject) {
    super(error);
    this.httpStatus = httpStatus;
  }
}
