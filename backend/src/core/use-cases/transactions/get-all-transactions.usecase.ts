import { Observable } from "rxjs";
import { UseCase } from "src/core/base/use-case.base";
import { TransactionRepository } from "src/core/domain/repositories/transaction/transaction.repository";
import { TransactionCnabModel } from "src/shared/models/transaction/transaction-cnab.model";

export class GetAllTransactionsUseCase implements UseCase<TransactionCnabModel[]> {
    
    constructor(
        private repository: TransactionRepository,
    ) { }

    public execute(): Observable<TransactionCnabModel[]> {
        return this.repository.getAll();
    }
}