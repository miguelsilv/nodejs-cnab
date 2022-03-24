import { Observable } from "rxjs";
import { TransactionCnabModel } from "src/shared/models/transaction/transaction-cnab.model";

export abstract class TransactionRepository {
    public abstract createByFile(file: Express.Multer.File): Observable<TransactionCnabModel[]>;
    public abstract getAll(): Observable<TransactionCnabModel[]>;
}