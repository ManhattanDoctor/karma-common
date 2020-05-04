import { IPagination } from '@ts-core/blockchain-fabric/chaincode/dto/IPagination';
import { LedgerUser } from '../../../ledger/user';

export interface IUserListDtoResponse extends IPagination<LedgerUser> {}
