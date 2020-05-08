import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';

export class PermissionGroupEditCommand extends TransportCommandFabricAsync<LedgerPermissionGroup, LedgerPermissionGroup> {
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

    constructor(request: LedgerPermissionGroup) {
        super(PermissionGroupEditCommand.NAME, request);
    }
}
