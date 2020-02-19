import { IncomingController } from './incoming.controller';
import { IncomingService } from './incoming.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    IncomingController
  ],
  providers: [
    IncomingService
  ]
})
export class IncomingModule { }
