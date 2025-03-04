import { usersTable } from '@api/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { type NodePgDatabase, drizzle } from 'drizzle-orm/node-postgres';

const schemas = {
  users: usersTable,
};

@Injectable()
export class DatabaseService {
  db: NodePgDatabase<typeof schemas>;

  constructor(private configService: ConfigService) {
    const DATABASE_URL = this.configService.get<string>('DATABASE_URL');

    if (!DATABASE_URL) {
      throw new Error('DATABASE_URL is not set');
    }

    this.db = drizzle(DATABASE_URL, {
      schema: schemas,
    });
  }
}
