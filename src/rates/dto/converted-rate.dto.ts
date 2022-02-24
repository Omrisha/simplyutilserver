export class ConvertedRateDto {
    constructor(name: string, rate: number, value: number) {
        this.name = name;
        this.rate = rate;
        this.value = value;
    }
    name: string;
    rate: number;
    value: number;
}