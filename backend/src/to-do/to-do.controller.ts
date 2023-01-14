import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Query,
  HostParam,
  Headers,
  Ip,
  HttpCode, Header, Redirect,
} from '@nestjs/common';
import { Request } from 'express';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  //@HttpCode(204)
  @Header('Cache-Control', 'none')
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDoService.create(createToDoDto);
  }

  @Get('ab*cd')
  wildcard(){
    return 'wildcard';
  }
  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect(@Query('version') version){
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('/query')
  query(@Query('title')title:string,
    @Headers() headers:any,
    @HostParam()host:string,
    @Ip() ip:string)
  {
    console.log('Headers ',headers);
    console.log('IP ',ip);
    return "Query Result "+title + " host "+host;
  }
  @Get()
  findAll(@Req() request: Request) {
    console.log('Request ',request);
    return this.toDoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toDoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDoService.update(+id, updateToDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDoService.remove(+id);
  }
}
