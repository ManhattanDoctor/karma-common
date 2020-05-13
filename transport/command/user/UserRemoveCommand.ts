import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { Matches } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';

export class UserRemoveCommand extends TransportCommandFabricAsync<IUserRemoveDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_REMOVE;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserRemoveDto) {
        super(UserRemoveCommand.NAME, TransformUtil.toClass(UserRemoveDto, request));
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

export interface IUserRemoveDto extends ITraceable {
    uid: string;
}

export class UserRemoveDto implements IUserRemoveDto {
    @Matches(LedgerUser.UID_REGXP)
    uid: string;
}
