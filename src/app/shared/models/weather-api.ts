export interface CurrentWeather {
    location: Location;
    condition: Condition;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    localTime: string;
}

export interface Condition {
    temperature_celcius: number;
    temperature_farenheit: number;
    condition_description: string;
    icon: string;
}


