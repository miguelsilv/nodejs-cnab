import { ApiProperty } from "@nestjs/swagger";

export class TransactionTypeDetailModel {
    @ApiProperty()
    public name: string;
    
    @ApiProperty()
    public debited: boolean;
}
