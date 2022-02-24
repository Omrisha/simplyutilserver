import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { WeatherDto } from './dto/weather.dto';

@Injectable()
export class WeatherService {
    private readonly apiKey: string = 'e65ef8948538477fabe19b9ac4e7d029';
    private readonly url: string = 'https://api.weatherbit.io/v2.0/';
    constructor(private httpClient: HttpService) {}

    getWeather(cityName: string): Observable<WeatherDto> {
        return this.httpClient.get(this.url + 'current?key=' + this.apiKey + '&city=' + cityName)
        .pipe(map((axiosResponse: AxiosResponse) => { 
            var dto = axiosResponse.data as { }; 
            var weathers = dto['data'] as WeatherDto[];
            return weathers[0];
        }));
    }
}
