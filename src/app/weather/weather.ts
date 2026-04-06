import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { WeatherApi } from '../shared/service/weather-api';
import { interval, map, startWith } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const INTERVAL_WEATHER_TIME = 30000;
@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather implements OnInit {

    currentTime: Date = new Date();
    private destroyRef = inject(DestroyRef);

    // Weather API:
    icon: string = '';
    degrees: string = '';
    location: string = '';

    constructor(private weatherApi: WeatherApi) {
    }

    ngOnInit() {

        interval(INTERVAL_WEATHER_TIME).pipe(startWith(0), takeUntilDestroyed(this.destroyRef)).subscribe(() => {        
            navigator.geolocation.getCurrentPosition((currentPos) => {
                this.updateCurrentWeather(currentPos.coords.latitude, currentPos.coords.longitude);   
            });  
        });      

        interval(1000).pipe(
            startWith(0),
            map(() => new Date()),
            takeUntilDestroyed(this.destroyRef))
            .subscribe((date) => {
                this.currentTime = date;
            });

       console.log('time: ', this.currentTime);
    }

    updateCurrentWeather(latitude: number, longitude: number): void {
       this.weatherApi.normalizeCurrentWeatherResponse(latitude, longitude).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
            this.icon = data.condition.icon;
            this.degrees = `${data.condition.temperature_celcius}°`;
            this.location = `${data.location.name}, ${data.location.region}`;
        }); 
    }
}
