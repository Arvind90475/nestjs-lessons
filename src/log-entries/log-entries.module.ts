import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogEntriesController } from './log-entries.controller';
import { LogEntrySchema } from './log-entries.model';
import { LogEntriesService } from './log-entries.service';

// might be needed in another module
export const mongooseModule = MongooseModule.forFeature([
  {
    name: 'LogEntry',
    schema: LogEntrySchema,
  },
]);

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'LogEntry', schema: LogEntrySchema }]),
  ],
  controllers: [LogEntriesController],
  providers: [LogEntriesService],
})
export class LogEntriesModule {}
