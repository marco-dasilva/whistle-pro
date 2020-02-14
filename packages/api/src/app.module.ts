import { TeamEntity } from './team/team.entity';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'osc',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      useNewUrlParser: true,
      logging: true,
      useUnifiedTopology: true,
      synchronize: true
    }),
    TeamModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
