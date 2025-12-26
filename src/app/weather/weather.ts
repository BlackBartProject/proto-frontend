import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherApi } from '../weather/weather-api';
import { interval, map, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather implements OnInit, OnDestroy {
    icon: string = '';
    currentTime: Date = new Date();
    subscription: Subscription = new Subscription();

    constructor(private weatherApi: WeatherApi) {
    }

    ngOnInit(): void {
        console.log('weather component...');
        this.weatherApi.getCurrentWeather().subscribe((data) => {
            this.icon = data.current.condition.icon;
            console.log('weather data:', data.current.condition.icon);
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
