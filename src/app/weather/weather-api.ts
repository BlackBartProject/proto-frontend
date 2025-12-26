import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherApi {
    constructor(private httpClient: HttpClient) {}

    getCurrentWeather(): Observable<any> { // 
        console.log('fetching current weather...');
        return this.httpClient.get('http://api.weatherapi.com/v1/current.json?key=b1d4466861114853ad430937251911&q=20.35116, -102.76832&lang=es');
    }

}
