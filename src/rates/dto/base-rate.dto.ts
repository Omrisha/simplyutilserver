export class BaseRateDto {
    base: QueryDto;
    data: [string, number];
}

class QueryDto {
    apikey: string;
    base_currency: string;
    timestamp: number;
}