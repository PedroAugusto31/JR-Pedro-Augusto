import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from 'src/typeorm/entities/Game';
import { AddGameParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game) private gameRepository: Repository<Game>,
  ) {}

  getGames() {}

  addGameToList(gameDetails: AddGameParams) {
    const newGame = this.gameRepository.create(gameDetails);
    return this.gameRepository.save(newGame);
  }
}
