export class WeatherDto {
    city_name: string;
    temp: number;
    weather: WeatherDetails;
    sunset: string;
    wind_dir: string;
}

class WeatherDetails {
    icon: string;
    description: string;
}