import { TransportCommandFabricAsync } from '@ts-core/blockchain-fabric/transport/command';
import { ITraceable } from '@ts-core/common/trace';
import { TransformUtil } from '@ts-core/common/util';
import { LedgerUser } from '../../../ledger/user';
import { Matches, IsDefined, ValidateNested, IsString, IsEnum } from 'class-validator';
import { KarmaLedgerCommand } from '../KarmaLedgerCommand';
import { LedgerCoinId } from '../../../ledger/coin';
import { LedgerWalletAccount } from '../../../ledger/wallet';
import { ILedgerPaymentDetails, LedgerPaymentDetails } from '../../../ledger/payment';

export class CoinEmitCommand extends TransportCommandFabricAsync<ICoinEmitDto, LedgerWalletAccount> {
    // --------------------------------------------------------------------------
    //
    //  Public Static Properties
    //
    // --------------------------------------------------------------------------

    public static readonly NAME = KarmaLedgerCommand.COIN_EMIT;

    // --------------------------------------------------------------------------
    //
    //  Constructor
    //
    // --------------------------------------------------------------------------

    constructor(request: ICoinEmitDto) {
        super(CoinEmitCommand.NAME, TransformUtil.toClass(CoinEmitDto, request));
    }

    // --------------------------------------------------------------------------
    //
    //  Protected Methods
    //
    // --------------------------------------------------------------------------

    protected validateResponse(item: LedgerWalletAccount): LedgerWalletAccount {
        return TransformUtil.toClass(LedgerWalletAccount, item);
    }
}

export interface ICoinEmitDto extends ITraceable {
    to: string;
    amount: string;
    coinId: LedgerCoinId;
    details: ILedgerPaymentDetails;
}

export class CoinEmitDto implements ICoinEmitDto {
    @Matches(LedgerUser.UID_REGXP)
    to: string;

    @IsString()
    amount: string;

    @IsEnum(LedgerCoinId)
    coinId: LedgerCoinId;

    @IsDefined()
    @ValidateNested()
    details: LedgerPaymentDetails;
}
