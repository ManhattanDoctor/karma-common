import { Paginable } from '@ts-core/blockchain-fabric/chaincode/dto/Paginable';
import { LedgerUser } from '../../../ledger/user';
import { ITraceable } from '@ts-core/common/trace';

export interface IUserListDto extends Paginable<LedgerUser>, ITraceable {}
