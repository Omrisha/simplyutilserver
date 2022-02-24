import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { RatesModule } from './rates/rates.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [RatesModule, WeatherModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('weather', 'rates');
  }

}
