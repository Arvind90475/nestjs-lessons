import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { LogEntriesModule } from 'src/log-entries/log-entries.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nesjs-api-travel-log'),
    AuthModule,
    LogEntriesModule,
  ],
})
export class AppModule {}
