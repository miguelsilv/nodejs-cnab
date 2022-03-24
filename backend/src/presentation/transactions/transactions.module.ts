import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Transaction } from "src/core/domain/entities/transaction/transaction.entity";
import { TransactionRepository } from "src/core/domain/repositories/transaction/transaction.repository";
import { CreateTransactionByFileUseCase } from "src/core/use-cases/transactions/create-transaction-by-file.usecase";
import { GetAllTransactionsUseCase } from "src/core/use-cases/transactions/get-all-transactions.usecase";
import { TransactionDataRepository } from "src/data/transaction/transaction-data.repository";
import { TransactionsController } from "./transactions.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Transaction]),],
    controllers: [TransactionsController],
    providers: [
        CreateTransactionByFileUseCase,
        GetAllTransactionsUseCase,
        { provide: TransactionRepository, useClass: TransactionDataRepository }
    ],
})
export class TransactionsModule { }