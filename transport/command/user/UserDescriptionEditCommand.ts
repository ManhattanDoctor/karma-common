import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { Length, IsString, Matches } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { RegExpUtil } from '../../../util';

export class UserDescriptionEditCommand extends TransportCommandFabricAsync<IUserDescriptionEditDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_DESCRIPTION_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserDescriptionEditDto) {
        super(UserDescriptionEditCommand.NAME, TransformUtil.toClass(UserDescriptionEditDto, request));
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

export interface IUserDescriptionEditDto extends ITraceable {
    uid: string;
    description: string;
}

export class UserDescriptionEditDto implements IUserDescriptionEditDto {
    @Matches(LedgerUser.UID_REGXP)
    uid: string;

    @Length(5, 50)
    @IsString()
    @Matches(RegExpUtil.DESCRIPTION)
    description: string;
}
