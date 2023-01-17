import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ToDoDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log('Request body in decorator ',request.body);
    return request.body.todo;
  },
);
