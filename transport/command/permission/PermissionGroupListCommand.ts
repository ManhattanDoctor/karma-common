import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { IPagination, Paginable } from '@ts-core/blockchain-fabric/chaincode/dto';
import { TransformUtil } from '@ts-core/common/util';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';

export class PermissionGroupListCommand extends TransportCommandFabricAsync<IPermissionGroupListDto, IPermissionGroupListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.PERMISSION_GROUP_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IPermissionGroupListDto) {
        super(PermissionGroupListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected validateResponse(response: IPermissionGroupListDtoResponse): IPermissionGroupListDtoResponse {
        response = super.validateResponse(response);
        response.items = TransformUtil.toClassMany(LedgerPermissionGroup, response.items);
        return response;
    }
}

export interface IPermissionGroupListDto extends Paginable<LedgerPermissionGroup>, ITraceable {}
export interface IPermissionGroupListDtoResponse extends IPagination<LedgerPermissionGroup> {}
