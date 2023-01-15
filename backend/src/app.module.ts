import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';
import { HostController } from './host/host.controller';
import { LibSpecificController } from './lib-specific/lib-specific.controller';
import { LoggerMiddleware } from './logger/logger.middleware';
import { ToDoController } from './to-do/to-do.controller';
import { loggerTwo } from './logger-two/logger-two.middleware';

@Module({
  imports: [ToDoModule],
  controllers: [AppController, HostController, LibSpecificController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      //.apply(loggerTwo)
      //.forRoutes(ToDoController)
      .apply(LoggerMiddleware)
      .exclude(
        { path: '/to-do/query', method: RequestMethod.GET })
      .forRoutes(ToDoController);
  }
}
