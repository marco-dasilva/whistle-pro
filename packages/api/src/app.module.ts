import { MatchModule } from './match/match.module';
import { GamedayModule } from './gameday/gameday.module';
import { LeagueModule } from './league/league.module';
import { PlayerModule } from './player/player.module';
import { RandomizeTeamsModule } from './randomize-teams/randomize-teams.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { AuthModule } from './auth/auth.module';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: new ConfigService().get('NODE_ENV') !== 'production',
      playground: new ConfigService().get('NODE_ENV') !== 'production'
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: new ConfigService().get('DB_URL'),
      port: +new ConfigService().get('DB_PORT'),
      username: 'mqr',
      password: new ConfigService().get('SQL_PASSWORD'),
      database: 'whistle_pro',
      autoLoadEntities: true,
      logging: true,
      synchronize: false,
      retryAttempts: 0
    }),
    TeamModule,
    AuthModule,
    RandomizeTeamsModule,
    PlayerModule,
    LeagueModule,
    GamedayModule,
    MatchModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
