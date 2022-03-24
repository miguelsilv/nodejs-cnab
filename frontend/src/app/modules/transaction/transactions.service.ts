import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transaction } from "src/app/shared/models/transaction.model";

@Injectable({
    providedIn: "root"
})
export class TransactionsService {

    constructor(
        private readonly http: HttpClient,
    ) { }

    public createByFile(file: File): Observable<Transaction[]> {
        const formData = new FormData();
        formData.append("file", file);

        return this.http.post<Transaction[]>("/api/transactions/upload", formData);
    }

    public getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>("/api/transactions");
    }

}