import { TransactionType } from "src/shared/enums/transaction-type.enum"; 7
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'enum', enum: TransactionType })
    public type: TransactionType;

    @Column({ type: 'date' })
    public date: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    public value: number;

    @Column({ length: 11 })
    public cpf: string;

    @Column({ length: 12 })
    public creditCard: string;

    @Column({ length: 6 })
    public hour: string;

    @Column({ length: 14 })
    public owner: string;

    @Column({ length: 19 })
    public store: string;

    constructor(partial?: Partial<Transaction>) {
        Object.assign(this, partial);
    }

}

