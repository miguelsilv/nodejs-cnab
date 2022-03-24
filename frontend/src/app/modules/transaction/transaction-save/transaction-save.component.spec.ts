import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionSaveComponent } from './transaction-save.component';

describe('TransactionSaveComponent', () => {
  let component: TransactionSaveComponent;
  let fixture: ComponentFixture<TransactionSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionSaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
