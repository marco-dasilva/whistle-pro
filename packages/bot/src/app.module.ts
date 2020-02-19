import { IncomingModule } from './incoming/incoming.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    IncomingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
