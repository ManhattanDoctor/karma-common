import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { IsArray, ValidateNested, Matches } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';

export class UserPermissionEditCommand extends TransportCommandFabricAsync<IUserPermissionEditDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_PERMISSION_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserPermissionEditDto) {
        super(UserPermissionEditCommand.NAME, TransformUtil.toClass(UserPermissionEditDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected validateResponse(item: LedgerUser): LedgerUser {
        return TransformUtil.toClass(LedgerUser, item);
    }
}

export interface IUserPermissionEditDto extends ITraceable {
    uid: string;
    permissions: Array<LedgerPermissionGroup>;
}

export class UserPermissionEditDto implements IUserPermissionEditDto {
    @Matches(LedgerUser.UID_REGXP)
    uid: string;
  
    @IsArray()
    @ValidateNested()
    permissions: Array<LedgerPermissionGroup>;
}
