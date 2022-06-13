import { Controller, Get, Header, Param, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpExceptionFilter } from '../common/filter/http-exception.filter';
import { WeatherDto } from './dto/weather.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get(':cityName')
  @Header('accept', 'application/json')
  @Header('content-type', 'application/json')
  @UseFilters(HttpExceptionFilter)
  getWeather(@Param('cityName') cityName: string): Observable<WeatherDto> {
    return this.weatherService.getWeather(cityName);
  }
}
