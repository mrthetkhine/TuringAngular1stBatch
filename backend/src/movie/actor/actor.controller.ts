import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ActorService } from '../actor.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { CreateActorDto } from '../dto/create-actor.dto';
import { UpdateMovieDto } from '../dto/update-movie.dto';
import { UpdateActorDto } from '../dto/udpate-actor.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/actors')
@UseGuards(AuthGuard('jwt'))
export class ActorController {

  constructor(private actorService:ActorService) {
  }
  @Get()
  findAll() {
    return this.actorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actorService.findOne(id);
  }
  @Post()
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.actorService.delete(id);
  }
}
