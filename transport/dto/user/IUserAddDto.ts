import { LedgerCryptoKey } from '../../../ledger/key';
import { LedgerPermissionGroup } from '../../../ledger/permission';
import { ValidateNested, IsDefined, IsArray } from 'class-validator';

export interface IUserAddDto {
    cryptoKey: Partial<LedgerCryptoKey>;
    permissions: Array<LedgerPermissionGroup>;
}

export class UserAddDto implements IUserAddDto {
    @IsDefined()
    cryptoKey: Partial<LedgerCryptoKey>;

    @IsArray()
    @ValidateNested()
    permissions: Array<LedgerPermissionGroup>;
}
