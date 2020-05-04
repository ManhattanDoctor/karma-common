import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { IsOptional, Matches, IsArray } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';

export class UserGetCommand extends TransportCommandFabricAsync<IUserGetDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_GET;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserGetDto) {
        super(UserGetCommand.NAME, TransformUtil.toClass(UserGetDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected validateResponse(item:LedgerUser):LedgerUser {
        return TransformUtil.toClass(LedgerUser,item);
    }

}

export interface IUserGetDto extends ITraceable {
    uid: string;
    details?: Array<keyof LedgerUser>;
}

export class UserGetDto implements IUserGetDto {
    @Matches(LedgerUser.UID_REGXP)
    uid: string;

    @IsArray()
    @IsOptional()
    details?: Array<keyof LedgerUser>;
}
