import { LoggerTwoMiddleware } from './logger-two.middleware';

describe('LoggerTwoMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerTwoMiddleware()).toBeDefined();
  });
});
