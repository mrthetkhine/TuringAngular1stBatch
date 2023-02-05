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
  HttpCode, Header, Redirect, HttpException, HttpStatus, UseFilters, ParseIntPipe, UsePipes, UseGuards, UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
import { ToDoService } from './to-do.service';
import { CreateToDoDto, CreateToDoSchema } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';
import { QueryToDoDto } from './dto/query-to-do.dto';
import { HttpExceptionFilter } from '../http-exception/http-exception.filter';
import { JoiValidationPipe } from '../pipes/joi-validation/joi-validation.pipe';
import { DtoValidationPipe } from '../pipes/dto-validation/dto-validation.pipe';
import { JwtGuard } from '../auth/jwt.guard';
import { LoggingInterceptor } from '../logging/logging.interceptor';
import { ToDoDecorator } from './to-do.decorator';

@UseInterceptors(LoggingInterceptor)
//@UseGuards(JwtGuard)
//@UseFilters(new HttpExceptionFilter())
@Controller('api/to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  //@HttpCode(204)
  @Header('Cache-Control', 'none')
  //@UsePipes(new JoiValidationPipe(CreateToDoSchema))
  create(@Body(new DtoValidationPipe()) createToDoDto: CreateToDoDto) {
    return this.toDoService.create(createToDoDto);
  }

  @Get('ab*cd')
  wildcard(@ToDoDecorator() todo:any){
    console.log('Wildcard todo ',todo);
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

  @Get('/completed')
  findAllCompleted()
  {
    return this.toDoService.findAllCompleted();
  }
  //new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })
  @Get(':id')
  findOne(@Param('id') id:string) {
    return this.toDoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateToDoDto: UpdateToDoDto) {
    return this.toDoService.update(id, updateToDoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toDoService.remove(id);
  }
}
