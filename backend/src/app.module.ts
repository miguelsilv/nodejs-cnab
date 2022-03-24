import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { MysqlInfraModule } from './infra/db/mysql/mysql-infra.module';
import { ConfigModule } from '@nestjs/config';
import { TransactionsModule } from './presentation/transactions/transactions.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MysqlInfraModule,
    TransactionsModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ]
})
export class AppModule { }
