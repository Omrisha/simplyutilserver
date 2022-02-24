import { Controller, Get, Param, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { RatesService } from './rates.service';
import { ConvertedRateDto } from './dto/converted-rate.dto';

@Controller('rates')
export class RatesController {
    constructor(private ratesService: RatesService) {}

    @Get(':baseRate/:value')
    getRate(@Param('baseRate') baseRate: string,
            @Param('value') value: number): Observable<ConvertedRateDto[]> {
        return this.ratesService.getRates(baseRate, value);
    }
}
