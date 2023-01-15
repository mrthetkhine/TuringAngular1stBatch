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
  HttpCode, Header, Redirect, HttpException, HttpStatus, UseFilters, ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { ToDoService } from './to-do.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { QueryToDoDto } from './dto/query-to-do.dto';
import { HttpExceptionFilter } from '../http-exception/http-exception.filter';

//@UseFilters(new HttpExceptionFilter())
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

  @Get('problem')
  @UseFilters(new HttpExceptionFilter())
  problem(){
    //throw new Error( 'wildcard');
    let errorResponse = {
      statusCode : HttpStatus.FORBIDDEN,
      errorDetail : 'Something go wrong',
      message: {
        description : 'Custom error message'
      }
    }
    throw new HttpException(errorResponse, HttpStatus.FORBIDDEN);
  }

  @Get('redirect')
  @Redirect('https://nestjs.com', 301)
  redirect(@Query('version') version){
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('/query')
  query(@Query()queryToDoDto:QueryToDoDto,
    @Headers() headers:any,
    @HostParam()host:string,
    @Ip() ip:string)
  {
    console.log('Headers ',headers);
    console.log('IP ',ip);
    return "Query Result "+queryToDoDto.title + " host "+host;
  }
  @Get()
  findAll(@Req() request: Request) {
    console.log('ToDo Controller get ',request.url);
    return this.toDoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',
    new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return this.toDoService.findOne(id);
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
