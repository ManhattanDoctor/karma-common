import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';
import { Matches } from 'class-validator';
import { TransformUtil } from '@ts-core/common/util';

export class PermissionGroupRemoveCommand extends TransportCommandFabricAsync<IPermissionGroupRemoveDto, LedgerPermissionGroup> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.PERMISSION_GROUP_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IPermissionGroupRemoveDto) {
        super(PermissionGroupRemoveCommand.NAME, TransformUtil.toClass(PermissionGroupRemoveDto, request));
    }
}

export interface IPermissionGroupRemoveDto extends ITraceable {
    uid: string;
}

export class PermissionGroupRemoveDto implements IPermissionGroupRemoveDto {
    @Matches(LedgerPermissionGroup.UID_REGXP)
    uid: string;
}
