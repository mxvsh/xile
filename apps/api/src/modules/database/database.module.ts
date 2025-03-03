import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';

@Module({
  providers: [ConfigService, DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
