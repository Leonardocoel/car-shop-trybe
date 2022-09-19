import HttpStatus from './httpStatus';

export type ErrorResponseObject = {
  message: string;
  httpStatus: HttpStatus;
};

export type ErrorTypes = 'Empty' | 'InvalidMongoId' | 'NotFound';

type ErrorCatalog = {
  [type in ErrorTypes]: ErrorResponseObject;
};

const errorCatalog: ErrorCatalog = {
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
