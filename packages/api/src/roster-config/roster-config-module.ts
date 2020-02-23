import { RosterConfigResolver } from './roster-config-resolver';
import { RosterConfigService } from './roster-config-service';
import { RosterConfigEntity } from './roster-config-entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    TypeOrmModule.forFeature([RosterConfigEntity])
  ],
  providers: [
    RosterConfigService,
    RosterConfigResolver
  ]
})
export class RosterConfigModule { }
