import { Module } from '@nestjs/common';
import { GamesController } from './controller/games/games.controller';
import { GamesService } from './services/games/games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  controllers: [GamesController],
  providers: [GamesService],
})
export class GamesModule {}
