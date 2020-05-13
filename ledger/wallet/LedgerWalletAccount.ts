import { IsEnum, IsNumberString, IsString } from 'class-validator';
import { IUIDable } from '@karma/common';
import { LedgerCoinId } from '../coin';
import * as uuid from 'uuid';

export class LedgerWalletAccount implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'wallet-account';

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    /*
    public static createUid(): string {
        return `${LedgerWalletAccount.PREFIX}:${uuid()}`;
    }
    */

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    uid: string;

    @IsEnum(LedgerCoinId)
    coinId: LedgerCoinId;

    @IsNumberString()
    value: string;
}
