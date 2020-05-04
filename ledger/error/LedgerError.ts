import { ExtendedError } from '@ts-core/common/error';
import { HttpCode, HttpStatus } from '@nestjs/common';

export class LedgerError<T = any> extends ExtendedError<T> {
    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(code: LedgerErrorCode, message: string = '', details?: T, isFatal?: boolean) {
        super(message, code, details, isFatal);
    }
}

export enum LedgerErrorCode {
    BAD_REQUEST = HttpStatus.BAD_REQUEST,
    UNAUTHORIZED = HttpStatus.UNAUTHORIZED,
    FORBIDDEN = HttpStatus.FORBIDDEN,
    NOT_FOUND = HttpStatus.NOT_FOUND
}
