import { IsString, Length, Matches, IsOptional } from 'class-validator';

export interface ILedgerPaymentDetails {
    systemId: string;
    description?: string;
    transactionId: string;
}

export class LedgerPaymentDetails implements ILedgerPaymentDetails {
    @IsString()
    systemId: string;

    @IsString()
    transactionId: string;

    @IsOptional()
    @Length(0, 250)
    @IsString()
    description: string;
}
