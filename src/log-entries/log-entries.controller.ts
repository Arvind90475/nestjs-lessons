import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { LogEntriesService } from './log-entries.service';
import { Request } from 'express';

@Controller('log-entries')
export class LogEntriesController {
  constructor(private logEntriesService: LogEntriesService) {}

  @Get()
  getAllLogEntries() {
    return this.logEntriesService.findAll();
  }
  @Get('/:id')
  getOneLogEntry(@Param('id') id: string) {
    return this.logEntriesService.findOne(id);
  }

  @Post()
  creatOneLogEntry(@Req() req: Request) {
    const logEntry = req.body;
    return this.logEntriesService.create(logEntry);
  }
}
