import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-save',
  templateUrl: './transaction-save.component.html',
  styleUrls: ['./transaction-save.component.scss']
})
export class TransactionSaveComponent implements OnInit {

  @Output() public inserted: EventEmitter<void>;

  public file?: File;

  constructor(
    private readonly transactionsService: TransactionsService
  ) {
    this.inserted = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public fileChange(inputFile: HTMLInputElement): void {
    if (inputFile.files && inputFile.files[0]) {
      this.file = inputFile.files[0];
    }
  }

  public save(): void {
    this.transactionsService.createByFile(this.file!)
      .subscribe(() => {
        this.inserted.emit();
      });
  }

}

