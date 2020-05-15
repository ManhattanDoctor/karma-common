import { IsEnum, Length, Matches, ArrayUnique, ArrayNotEmpty, IsOptional, IsString } from 'class-validator';
import { LedgerPermissionKey } from './LedgerPermissionKey';
import { RegExpUtil } from '../../util';
import { IUIDable } from '../../IUIDable';
import * as uuid from 'uuid';

export class LedgerPermissionGroup implements IUIDable {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static PREFIX = 'permission';
    public static UID_REGXP = new RegExp(`${LedgerPermissionGroup.PREFIX}:${RegExpUtil.UUID}`, 'i');

    // --------------------------------------------------------------------------
    //
    //  Static Methods
    //
    // --------------------------------------------------------------------------

    public static createUid(): string {
        return `${LedgerPermissionGroup.PREFIX}:${uuid()}`;
    }

    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------

    @Matches(LedgerPermissionGroup.UID_REGXP)
    uid: string;

    @Length(5, 50)
    @IsString()
    @Matches(RegExpUtil.DESCRIPTION)
    description: string;

    @IsString({ each: true })
    @ArrayUnique()
    permissions: Array<LedgerPermissionKey>;
}
