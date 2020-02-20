import { RandomizeTeamsModule } from './randomize-teams/randomize-teams.module';
import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'whistle',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      useUnifiedTopology: true,
      useNewUrlParser: true,
      logging: true
    }),
    TeamModule,
    AuthModule,
    UsersModule,
    RandomizeTeamsModule
  ],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule { }
