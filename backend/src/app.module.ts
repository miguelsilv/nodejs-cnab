import { Module } from '@nestjs/common';
import { MysqlInfraModule } from './infra/db/mysql/mysql-infra.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MysqlInfraModule,
  ],
})
export class AppModule { }
