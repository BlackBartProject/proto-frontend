import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, catchError, throwError } from 'rxjs';
// Types and classes
import { CurrentWeather } from '../models/weather-api';

const LANG: 'es'|'en' = 'es';
const APIKEY: string = 'b1d4466861114853ad430937251911';
@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
    constructor(private httpClient: HttpClient) {}



    getCurrentWeather(latitude?: number, longitude?: number): Observable<any> {
        try {
            console.log('fetching current weather...');
            return this.httpClient.get(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${latitude},${longitude}&lang=${LANG}`); // q=20.35116, -102.76832
        }
        catch(error: any) {
            return error;
        }    
    }

    normalizeCurrentWeatherResponse(latitude: number, longitude: number): Observable<CurrentWeather>  {  
        
        return this.getCurrentWeather(latitude, longitude).pipe(
            map((data) => ({
                location: {
                    name: data.location.name,
                    region: data.location.region,
                    country: data.location.country,
                    localTime: data.location.localtime
                },
                condition: {
                    temperature_celcius: data.current.temp_c,
                    temperature_farenheit: data.current.temp_f,
                    condition_description: data.current.condition.text,
                    icon: data.current.condition.icon
                }
            })),
            catchError((error) => {
                console.error('Error normalizing weather response:', error);
                return throwError(() => error);
            })
        );
    }



}
