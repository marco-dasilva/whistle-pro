import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    if (process.env.NODE_ENV === 'production') {
      this.envConfig = {
        DB_URL: process.env.DB_URL,
        DB_PORT: process.env.DB_PORT,
        SQL_PASSWORD: process.env.SQL_PASSWORD,
        JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
        COOKIE_SECRET: process.env.COOKIE_SECRET
      };
    } else {
      this.envConfig = dotenv.parse(fs.readFileSync('.env'));
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
