import HttpStatus from './httpStatus';

export type ErrorResponseObject = {
  message: string;
  httpStatus: HttpStatus;
};

export type ErrorTypes = 'Empty' | 'InvalidMongoId';

type ErrorCatalog = {
  [type in ErrorTypes]: ErrorResponseObject;
};

const errorCatalog: ErrorCatalog = {
  Empty: {
    message: 'Fields cannot be empty',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: HttpStatus.BAD_REQUEST,
  },
};

export default errorCatalog;
