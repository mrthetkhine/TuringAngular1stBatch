import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function loggerTwo(req: Request, res: Response, next: NextFunction) {
  console.log('LoggerTwoMiddleware Request ',req.url);
  next();
}