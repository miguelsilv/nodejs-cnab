import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionsService } from './transactions.service';
import { TransactionSaveComponent } from './transaction-save/transaction-save.component';
import { TransactionComponent } from './transaction.component';

@NgModule({
  declarations: [
    TransactionListComponent,
    TransactionSaveComponent,
    TransactionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TransactionRoutingModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionModule { }
