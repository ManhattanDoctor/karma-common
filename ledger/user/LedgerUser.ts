import { IsEnum, IsDate, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { LedgerPermissionGroup, LedgerPermissionKey } from '../permission';
import { LedgerCryptoKey } from '../cryptoKey/LedgerCryptoKey';
import { RegExpUtil } from '../../util';
import { IUIDable } from '../../IUIDable';
import * as uuid from 'uuid';
import * as _ from 'lodash';
import { LedgerError, LedgerErrorCode } from '../error';
import { LedgerWallet } from '../wallet/LedgerWallet';

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
    public static UID_REGXP = new RegExp(`${LedgerUser.PREFIX}/${RegExpUtil.DATE_TIME}/${RegExpUtil.UUID}$`, 'i');

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
        return `${LedgerUser.PREFIX}/${_.padStart(time.toString(), 14, '0')}/${uuid()}`;
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

    @Type(() => LedgerWallet)
    wallet: LedgerWallet;

    @Type(() => LedgerPermissionGroup)
    permissions: Array<LedgerPermissionGroup>;

    // --------------------------------------------------------------------------
    //
    //  Pubic Methods
    //
    // --------------------------------------------------------------------------

    public getPermissions(): Array<LedgerPermissionKey> {
        if (_.isNil(this.permissions)) {
            throw new LedgerError(LedgerErrorCode.BAD_REQUEST, `Unable to find permissions, probably must load it them first`);
        }
        return _.uniq(_.compact(_.flatten(this.permissions.map(item => item.permissions))));
    }
}
