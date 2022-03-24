import { ClassSerializerInterceptor, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Observable } from "rxjs";
import { CreateTransactionByFileUseCase } from "src/core/use-cases/transactions/create-transaction-by-file.usecase";
import { GetAllTransactionsUseCase } from "src/core/use-cases/transactions/get-all-transactions.usecase";
import { TransactionCnabModel } from "src/shared/models/transaction/transaction-cnab.model";
import { ApiTags, ApiOperation, ApiCreatedResponse, ApiConsumes, ApiBody } from "@nestjs/swagger";

@ApiTags("Transações")
@Controller("/transactions")
export class TransactionsController {

    constructor(
        private readonly createTransactionByFileUseCase: CreateTransactionByFileUseCase,
        private readonly getAllTransactionsUseCase: GetAllTransactionsUseCase,
    ) { }

    @ApiOperation({
        summary: "Importação de arquivo cnab",
        description: "É possivel inserir transações com base em um arquivo cnab",
    })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @ApiCreatedResponse({
        description: "Transações importadas com sucesso",
        type: [TransactionCnabModel]
    })
    @Post("upload")
    @UseInterceptors(FileInterceptor('file'))
    public createByFile(@UploadedFile() file: Express.Multer.File): Observable<TransactionCnabModel[]> {
        return this.createTransactionByFileUseCase.execute(file);
    }

}