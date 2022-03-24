import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  public transactions: Transaction[];

  constructor(
    private readonly transactionsService: TransactionsService
  ) {
    this.transactions = []
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  private getTransactions() {
    this.transactionsService.getTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
      });
  }
}
