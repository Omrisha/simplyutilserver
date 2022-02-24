import { Module } from '@nestjs/common';
import { RatesModule } from './rates/rates.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [RatesModule, WeatherModule],
})
export class AppModule {}
