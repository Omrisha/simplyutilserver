import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConvertedRateDto } from './dto/converted-rate.dto';
import { BaseRateDto } from './dto/base-rate.dto';

@Injectable()
export class RatesService {
    private readonly apiKey: string = '2b066a80-9552-11ec-8941-35fb44e30881';
    private readonly url: string = 'https://freecurrencyapi.net/api/v2/latest';
    constructor(private httpClient: HttpService) {}

    getRates(baseRate: string, value: number): Observable<ConvertedRateDto[]> {
        return this.httpClient.get(this.url + '?apikey=' + this.apiKey + '&base_currency=' + baseRate)
        .pipe(map((axiosResponse: AxiosResponse) => { 
            var dto = axiosResponse.data as BaseRateDto; 
            var rates: ConvertedRateDto[] = [];
            for (const [rate, rateValue] of Object.entries(dto.data))
                rates.push(new ConvertedRateDto(rate, rateValue as number, rateValue as number * value));
            return rates;
        }));
    }

    getRateNames(): Observable<String[]> {
        return this.httpClient.get(this.url + '?apikey=' + this.apiKey)
        .pipe(map((axiosResponse: AxiosResponse) => { 
            var dto = axiosResponse.data as BaseRateDto; 
            var rates: String[] = [];
            for (const [rate, rateValue] of Object.entries(dto.data))
                rates.push(rate);
            return rates;
        }));
    }
}
