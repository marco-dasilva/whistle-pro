import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchEntity } from "./match.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([MatchEntity])
  ],
  providers: [],
  exports: []
})
export class MatchModule { }
