import HttpStatus from './httpStatus';

export type ErrorResponseObject = {
  error: string;
  httpStatus: HttpStatus;
};

export type ErrorTypes = 'Empty' | 'InvalidMongoId' | 'NotFound';

const errorCatalog: Record<ErrorTypes, ErrorResponseObject> = {
  Empty: {
    error: 'Fields cannot be empty',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  NotFound: {
    error: 'Object not found',
    httpStatus: HttpStatus.NOT_FOUND,
  },
};

export default errorCatalog;
