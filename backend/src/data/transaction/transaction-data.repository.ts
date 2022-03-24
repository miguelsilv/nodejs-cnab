import { from, map, Observable, of } from "rxjs";
import { Transaction } from "src/core/domain/entities/transaction/transaction.entity";
import { TransactionRepository } from "src/core/domain/repositories/transaction/transaction.repository";
import { TransactionCnabModel } from "src/shared/models/transaction/transaction-cnab.model";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { transactionType } from "src/shared/constansts/transaction-type.const";

export class TransactionDataRepository implements TransactionRepository {

    constructor(
        @InjectRepository(Transaction) private database: Repository<Transaction>,
    ) {
    }

    public createByFile(file: Express.Multer.File): Observable<TransactionCnabModel[]> {
        const text = file.buffer.toString();
        const lines = text.trim().split("\n");

        const transactions = lines.map(line => new TransactionCnabModel(line));

        const saved = from(this.database.save(
            transactions.map(transaction => new Transaction({
                type: transaction.typeId,
                date: transaction.date,
                value: transaction.value,
                cpf: transaction.cpf,
                creditCard: transaction.creditCard,
                hour: transaction.hour,
                owner: transaction.owner,
                store: transaction.store,
            }))
        ));

        return saved.pipe(
            map((transactions) => this.entityToModel(transactions))
        );
    }


    public getAll(): Observable<TransactionCnabModel[]> {
        const transactions = this.database.find();

        return from(transactions).pipe(
            map((transactions) => this.entityToModel(transactions))
        );
    }


    private entityToModel(transactions: Transaction[]): TransactionCnabModel[] {
        return transactions.map(transaction => (<TransactionCnabModel>{
            id: transaction.id,
            type: transactionType[transaction.type],
            date: transaction.date,
            value: transaction.value,
            cpf: transaction.cpf,
            creditCard: transaction.creditCard,
            hour: transaction.hour,
            owner: transaction.owner,
            store: transaction.store,
        }));
    }

}