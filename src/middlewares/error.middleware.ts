import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import CustomError from '../errors/customError';

const errorMidleware: ErrorRequestHandler = async (error: Error | ZodError, _req, res, _next) => {
  if (error instanceof ZodError) {
    const [issue] = error.issues;
    return res.status(400).json(issue);
  }

  if (error instanceof CustomError) {
    const { httpStatus, message } = error;
    return res.status(httpStatus).json({ error: message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
};

export default errorMidleware;
