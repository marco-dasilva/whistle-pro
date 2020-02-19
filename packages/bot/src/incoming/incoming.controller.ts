import { Controller, Post, Body } from '@nestjs/common';
import { IncomingService } from './incoming.service';

@Controller('incoming')
export class IncomingController {
  constructor(private readonly incomingService: IncomingService) { }

  @Post()
  getResponse(@Body() body: any): string {
    console.log(body);
    return this.incomingService.getHello();
  }
}
