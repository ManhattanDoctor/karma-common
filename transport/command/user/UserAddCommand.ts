import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { IsString, Matches, IsOptional, IsDefined } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerCryptoKey } from '../../../ledger/cryptoKey';
import { LedgerPermissionGroup } from '../../../ledger/permission';

export class UserAddCommand extends TransportCommandFabricAsync<IUserAddDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_ADD;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserAddDto) {
        super(UserAddCommand.NAME, TransformUtil.toClass(UserAddDto, request));
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

export interface IUserAddDto extends ITraceable {
    cryptoKey: Partial<LedgerCryptoKey>;
    description: string;
    permissionIds?: Array<string>;
}

export class UserAddDto implements IUserAddDto {
    @IsDefined()
    cryptoKey: Partial<LedgerCryptoKey>;

    @IsString()
    description: string;

    @IsOptional()
    @Matches(LedgerPermissionGroup.UID_REGXP, { each: true })
    permissionIds?: Array<string>;
}
