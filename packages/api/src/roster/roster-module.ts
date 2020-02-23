import { RosterService } from './roster-service';
import { RosterEntity } from './roster-entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RosterResolver } from './roster-resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([RosterEntity])
  ],
  providers: [
    RosterService,
    RosterResolver
  ]
})
export class RosterModule { }
