import { Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { UseCase } from "src/core/base/use-case.base";
import { TransactionRepository } from "src/core/domain/repositories/transaction/transaction.repository";
import { TransactionCnabModel } from "src/shared/models/transaction/transaction-cnab.model";


@Injectable()
export class CreateTransactionByFileUseCase implements UseCase<TransactionCnabModel[]> {
    
    constructor(
        private repository: TransactionRepository,
    ) { }

    public execute(file: Express.Multer.File): Observable<TransactionCnabModel[]> {
        return this.repository.createByFile(file);
    }
}