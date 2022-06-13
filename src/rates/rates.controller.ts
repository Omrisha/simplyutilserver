import { Controller, Get, Header, Param, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RatesService } from './rates.service';
import { ConvertedRateDto } from './dto/converted-rate.dto';
import { HttpExceptionFilter } from '../common/filter/http-exception.filter';

@Controller('rates')
export class RatesController {
  constructor(private ratesService: RatesService) {}

  @Get(':baseRate/:value')
  @Header('accept', 'application/json')
  @Header('content-type', 'application/json')
  @UseFilters(HttpExceptionFilter)
  getRate(
    @Param('baseRate') baseRate: string,
    @Param('value') value: number,
  ): Observable<ConvertedRateDto[]> {
    return this.ratesService.getRates(baseRate, value);
  }

  @Get('names')
  @Header('accept', 'application/json')
  @Header('content-type', 'application/json')
  getRateNames(): Observable<string[]> {
    return this.ratesService.getRateNames();
  }
}
