export interface Transaction {
    id: number;
    type: {
        name: string,
        debited: boolean
    },
    date: Date,
    value: number,
    cpf: string,
    creditCard: string,
    hour: string,
    owner: string,
    store: string
}