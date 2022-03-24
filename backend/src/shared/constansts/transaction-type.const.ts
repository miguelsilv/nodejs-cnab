import { TransactionType } from "../enums/transaction-type.enum";
import { TransactionTypeDetailModel } from "../models/transaction/transaction-type-detail.model";

export const transactionType: { [x: number]: TransactionTypeDetailModel } = {
    [TransactionType.Debit]: {
        name: 'Débito',
        debited: true,
    },
    [TransactionType.Bill]: {
        name: 'Boleto',
        debited: true,
    },
    [TransactionType.Financing]: {
        name: 'Financiamento',
        debited: true,
    },
    [TransactionType.Credit]: {
        name: 'Crédito',
        debited: false,
    },
    [TransactionType.Loan]: {
        name: 'Recebimento Empréstimo',
        debited: false,
    },
    [TransactionType.Sales]: {
        name: 'Vendas',
        debited: false,
    },
    [TransactionType.ReceivementTED]: {
        name: 'Recebimento TED',
        debited: false,
    },
    [TransactionType.ReceivementDOC]: {
        name: 'Recebimento DOC',
        debited: false,
    },
    [TransactionType.Rent]: {
        name: 'Aluguel',
        debited: true,
    }
}