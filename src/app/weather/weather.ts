import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherApi } from '../shared/service/weather-api';
import { interval, map, startWith, Subscription } from 'rxjs';

const LATITUDE = 20.351442907826602;
const LONGITUDE = -102.76288324036113;
@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather implements OnInit, OnDestroy {
    currentTime: Date = new Date();
    subscription: Subscription = new Subscription();

    // Weather API:
    icon: string = '';
    degrees: string = '';
    location: string = '';

    constructor(private weatherApi: WeatherApi) {
    }

    async ngOnInit() {

        await navigator.geolocation.getCurrentPosition((currentPos) => {

            this.weatherApi.normalizeCurrentWeatherResponse(currentPos.coords.latitude, currentPos.coords.longitude).subscribe((data) => {
                console.log('normalizeCurrentWeatherResponse...', data);
                this.icon = data.condition.icon;
                this.degrees = `${data.condition.temperature_celcius}°`;
                this.location = `${data.location.name}, ${data.location.region}`;
            });
        });    

        this.subscription = interval(1000).pipe(
            startWith(0),
            map(() => new Date())
        ).subscribe((date) => {
            this.currentTime = date;
        });

       console.log('time: ', this.currentTime);

    }

ngOnDestroy(): void {
    this.subscription.unsubscribe();
}

}
