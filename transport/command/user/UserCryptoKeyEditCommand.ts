import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { IsArray, IsDefined, ValidateNested, Matches } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerPermissionGroup } from '../../../ledger/permission';
import { LedgerCryptoKey } from '../../../ledger/cryptoKey';

export class UserCryptoKeyEditCommand extends TransportCommandFabricAsync<IUserCryptoKeyEditDto, LedgerUser> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.USER_CRYPTO_KEY_EDIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: IUserCryptoKeyEditDto) {
        super(UserCryptoKeyEditCommand.NAME, TransformUtil.toClass(UserCryptoKeyEditDto, request));
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

export interface IUserCryptoKeyEditDto extends ITraceable {
    uid: string;
    cryptoKey: Partial<LedgerCryptoKey>;
}

export class UserCryptoKeyEditDto implements IUserCryptoKeyEditDto {
    @Matches(LedgerUser.UID_REGXP)
    uid: string;
  
    @IsDefined()
    cryptoKey: Partial<LedgerCryptoKey>;
}
