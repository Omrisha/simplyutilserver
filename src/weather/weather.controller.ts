import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { WeatherDto } from './dto/weather.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private weatherService: WeatherService){}

    @Get(':cityName')
    getWeather(@Param('cityName') cityName: string): Observable<WeatherDto> {
        return this.weatherService.getWeather(cityName);
    }
}
