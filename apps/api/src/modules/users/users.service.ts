import { DatabaseService } from '@api/modules/database/database.service';
import { type UserInsert, usersTable } from '@api/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.db.query.users.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.db.query.users.findFirst({
      where: eq(usersTable.id, id),
    });
  }

  async findOneByEmail(email: string) {
    return this.databaseService.db.query.users.findFirst({
      where: eq(usersTable.email, email),
    });
  }

  async create(user: UserInsert) {
    return this.databaseService.db.insert(usersTable).values(user);
  }
}
