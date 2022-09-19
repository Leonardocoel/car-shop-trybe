import HttpStatus from './httpStatus';

export type ErrorResponseObject = {
  message: string;
  httpStatus: HttpStatus;
};

export type ErrorTypes = 'Empty' | 'InvalidMongoId' | 'NotFound';

const errorCatalog: Record<ErrorTypes, ErrorResponseObject> = {
  Empty: {
    message: 'Fields cannot be empty',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  NotFound: {
    message: 'Object not found',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
};

export default errorCatalog;
