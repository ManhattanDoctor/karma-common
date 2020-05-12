import { IsEnum, IsString } from 'class-validator';
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

    public static create(coinId: LedgerCoinId): LedgerWalletAccount {
        let item = new LedgerWalletAccount();
        item.uid = LedgerWalletAccount.createUid(coinId);
        item.coinId = coinId;
        item.value = '0';
        return item;
    }

    public static createUid(coinId: LedgerCoinId): string {
        return `${LedgerWalletAccount.PREFIX}/${coinId}/${uuid()}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @IsString()
    uid: string;

    @IsEnum(LedgerCoinId)
    coinId: LedgerCoinId;

    @IsString()
    value: string;
}
