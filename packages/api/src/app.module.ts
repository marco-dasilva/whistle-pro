import { RandomizeTeamsModule } from './randomize-teams/randomize-teams.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mvia.ca',
      port: 33006,
      username: 'mqr',
      password: process.env.SQL_PASSWORD,
      database: 'whistle_pro',
      autoLoadEntities: true,
      logging: true,
      synchronize: true,
      retryAttempts: 0
    }),
    TeamModule,
    AuthModule,
    UserModule,
    RandomizeTeamsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
