import { Module } from '@nestjs/common';
import { GamesController } from './controller/games/games.controller';
import { GamesService } from './services/games/games.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
