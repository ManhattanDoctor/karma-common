import { IsEnum, IsDate, Length, Matches, IsOptional, IsString } from 'class-validator';
import { Exclude, Type } from 'class-transformer';
import { LedgerPermissionGroup } from '../permission';
import { LedgerCryptoKey } from '../key/LedgerCryptoKey';
import { RegExpUtil } from '../../util';
import { IUIDable } from '../../IUIDable';
import * as uuid from 'uuid';
import * as _ from 'lodash';

export enum LedgerUserStatus {
    ACTIVE = 'ACTIVE',
    NON_ACTIVE = 'NON_ACTIVE'
}

export class LedgerUser implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'user';
    public static UID_REGXP = new RegExp(`${LedgerUser.PREFIX}:${RegExpUtil.DATE_TIME}:${RegExpUtil.UUID}$`, 'i');

    private static MAX_CREATED_DATE = new Date(2500, 0);

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static create(createdDate: Date): LedgerUser {
        let item = new LedgerUser();
        item.uid = LedgerUser.createUid(createdDate);
        item.createdDate = createdDate;
        return item;
    }
    
    public static createUid(createdDate: Date): string {
        let time = LedgerUser.MAX_CREATED_DATE.getTime() - createdDate.getTime();
        return `${LedgerUser.PREFIX}:${_.padStart(time.toString(), 14, '0')}:${uuid()}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerUser.UID_REGXP)
    uid: string;

    @IsEnum(LedgerUserStatus)
    status: LedgerUserStatus;

    @Type(() => Date)
    @IsDate()
    createdDate: Date;

    @Type(() => LedgerCryptoKey)
    cryptoKey: LedgerCryptoKey;

    @Type(() => LedgerPermissionGroup)
    permissions: Array<LedgerPermissionGroup>;
}
