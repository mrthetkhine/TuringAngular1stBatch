import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ActorService } from '../actor.service';
import { CreateActorDto } from '../dto/create-actor.dto';
import { UpdateActorDto } from '../dto/udpate-actor.dto';
import { DirectorService } from '../director.service';
import { CreateDirectorDto } from '../dto/create-director.dto';
import { UpdateDirectorDto } from '../dto/update-director.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/directors')
@UseGuards(AuthGuard('jwt'))
export class DirectorController {
  constructor(private directorService:DirectorService) {
  }
  @Get()
  findAll() {
    return this.directorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorService.findOne(id);
  }
  @Post()
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDirectorDto: UpdateDirectorDto) {
    return this.directorService.update(id, updateDirectorDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.directorService.delete(id);
  }
}
