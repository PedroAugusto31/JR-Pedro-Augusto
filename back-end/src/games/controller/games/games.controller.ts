import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddGameDto } from '../../dtos/AddGame.dto';
import { GamesService } from '../../services/games/games.service';

@Controller('games')
export class GamesController {
  constructor(private gameService: GamesService) {}

  @Get()
  async getGames() {
    return await this.gameService.getGames();
  }

  @Post()
  async addGameToList(@Body() addGameDto: AddGameDto) {
    try {
      return await this.gameService.addGameToList(addGameDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
