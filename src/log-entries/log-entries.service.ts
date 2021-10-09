import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILogEntry } from './log-entries.model';

@Injectable()
export class LogEntriesService {
  constructor(@InjectModel('LogEntry') private logEntry: Model<ILogEntry>) {}
  findAll() {
    return this.logEntry.find({});
  }

  findOne(id: string) {
    return this.logEntry.findById(id);
  }

  create(logEntry) {
    return this.logEntry.create(logEntry);
  }
}
