import { ErrorResponseObject } from './catalog';

export default class CustomError extends Error {
  public readonly httpStatus;

  constructor({ message, httpStatus }: ErrorResponseObject) {
    super(message);
    this.httpStatus = httpStatus;
  }
}
