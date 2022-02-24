import { Controller, Get, Param, Query, UseFilters } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RatesService } from './rates.service';
import { ConvertedRateDto } from './dto/converted-rate.dto';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';

@Controller('rates')
export class RatesController {
    constructor(private ratesService: RatesService) {}

    @Get(':baseRate/:value')
    @UseFilters(HttpExceptionFilter)
    getRate(@Param('baseRate') baseRate: string,
            @Param('value') value: number): Observable<ConvertedRateDto[]> {
        return this.ratesService.getRates(baseRate, value);
    }
}
