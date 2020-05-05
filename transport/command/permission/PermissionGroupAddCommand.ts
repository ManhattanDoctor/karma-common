import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';

export class PermissionGroupAddCommand extends TransportCommandFabricAsync<Partial<LedgerPermissionGroup>, LedgerPermissionGroup> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.PERMISSION_GROUP_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: Partial<LedgerPermissionGroup>) {
        super(PermissionGroupAddCommand.NAME, request);
    }
}
