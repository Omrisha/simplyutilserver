import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { WeatherDto } from './dto/weather.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService){}

    @Get(':cityName')
    @UseFilters(HttpExceptionFilter)
    getWeather(@Param('cityName') cityName: string): Observable<WeatherDto> {
        return this.weatherService.getWeather(cityName);
    }
}
