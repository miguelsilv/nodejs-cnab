import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionSaveComponent } from './transaction-save/transaction-save.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  public loading: boolean;

  @ViewChild(TransactionSaveComponent)
  public saveRef!: TransactionSaveComponent;

  @ViewChild(TransactionListComponent)
  public listRef!: TransactionListComponent;

  constructor() {
    this.loading = false;
  }


  ngOnInit(): void {
  }

  public save() {
    this.loading = true;
    this.saveRef.save();
  }

  public afterSave() {
    this.loading = false;
  }

  public list() {
    this.listRef.getTransactions();
  }

}
