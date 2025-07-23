import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddGameDto } from '../../dtos/AddGame.dto';
import { GamesService } from '../../services/games/games.service';
import { UpdateGameDto } from '../../dtos/UpdateGame.dto';

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

  @Put(':id')
  async updateGameByid(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    await this.gameService.updateGame(id, updateGameDto);
  }

  @Delete(':id')
  async deleteGameById(@Param('id', ParseIntPipe) id: number) {
    await this.gameService.deleteGame(id);
  }
}
