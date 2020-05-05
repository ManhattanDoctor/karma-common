import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { TransformUtil } from '@ts-core/common/util';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { IPagination } from '@ts-core/blockchain-fabric/chaincode/dto/IPagination';
import { Paginable } from '@ts-core/blockchain-fabric/chaincode/dto/Paginable';
import { ITraceable } from '@ts-core/common/trace';
import { LedgerUser } from '../../../ledger/user';

export class UserListCommand extends TransportCommandFabricAsync<IUserListDto, IUserListDtoResponse> {
    // --------------------------------------------------------------------------
    //
    //  Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_LIST;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserListDto) {
        super(UserListCommand.NAME, request, null, true);
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected validateResponse(response: IUserListDtoResponse): IUserListDtoResponse {
        response = super.validateResponse(response);
        response.items = TransformUtil.toClassMany(LedgerUser, response.items);
        return response;
    }
}

export interface IUserListDto extends Paginable<LedgerUser>, ITraceable {}
export interface IUserListDtoResponse extends IPagination<LedgerUser> {}
