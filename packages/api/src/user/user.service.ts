
import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly user: User[];

  constructor() {
    this.user = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.user.find(user => user.username === username);
  }
}
