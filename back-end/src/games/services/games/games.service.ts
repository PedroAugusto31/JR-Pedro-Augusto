import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { AddGameParams, UpdateGameParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  getGames() {
    return this.gameRepository.find();
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
