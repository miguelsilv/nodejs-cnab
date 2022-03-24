import { TransactionType } from "src/shared/enums/transaction-type.enum";
import { Exclude, Expose } from 'class-transformer';
import { transactionType } from "src/shared/constansts/transaction-type.const";
import { ApiProperty } from "@nestjs/swagger";
import { TransactionTypeDetailModel } from "./transaction-type-detail.model";

export class TransactionCnabModel {
    @Exclude()
    private line: string;

    public id: number;

    @Exclude()
    public get typeId(): TransactionType {
        return +this.line.substring(0, 1) as TransactionType;
    }

    @Expose()
    @ApiProperty({
        type: TransactionTypeDetailModel,
    })
    public get type(): TransactionTypeDetailModel {
        return transactionType[this.typeId];
    }

    @Expose()
    @ApiProperty()
    public get date(): Date {
        const year = +this.line.substring(1, 5);
        const month = +this.line.substring(5, 7);
        const day = +this.line.substring(7, 9);

        return new Date(year, month - 1, day);
    }

    @Expose()
    @ApiProperty()
    public get value(): number {
        return parseFloat(this.line.substring(9, 19)) / 100;
    }

    @Expose()
    @ApiProperty()
    public get cpf(): string {
        return this.line.substring(19, 30);
    }

    @Expose()
    @ApiProperty()
    public get creditCard(): string {
        return this.line.substring(30, 42);
    }

    @Expose()
    @ApiProperty()
    public get hour(): string {
        const hour = this.line.substring(42, 44);
        const minute = this.line.substring(44, 46);
        const second = this.line.substring(46, 48);

        return `${hour}:${minute}:${second}`;
    }


    @Expose()
    @ApiProperty()
    public get owner(): string {
        return this.line.substring(48, 62).trim();
    }

    @Expose()
    @ApiProperty()
    public get store(): string {
        return this.line.substring(62, 81).trim();
    }

    constructor(line: string) {
        this.line = line;
    }
}


