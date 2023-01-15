import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('lib-specific')
export class LibSpecificController {
  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Post()
  create(@Res() res: Response) {

    res.status(HttpStatus.OK).send({
      data : 'Some value'
    });
  }

}
