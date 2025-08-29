import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { AddGameParams, UpdateGameParams } from 'src/utils/types';
import { validateGameCover } from 'src/utils/scripts';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  async getGames() {
    const games = await this.gameRepository.find();

    const gamesWithCover = await Promise.all(
      games.map(async (game) => {
        const gameCover = await validateGameCover(game.title);
        return {
          ...game,
          // Transforming platforms to array of strings for correct usage in front-end
          platforms: game.platforms.split(','),
          gameCover: gameCover,
        };
      }),
    );
    return gamesWithCover;
  }

  addGameToList(gameDetails: AddGameParams) {
    const newGame = this.gameRepository.create(gameDetails);
    return this.gameRepository.save(newGame);
  }

  updateGame(id: number, updateGameDetails: UpdateGameParams) {
    return this.gameRepository.update({ id }, { ...updateGameDetails });
  }

  deleteGame(id: number) {
    return this.gameRepository.delete({ id });
  }
}
