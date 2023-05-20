import { Component, Input, OnDestroy, OnChanges, EventEmitter, Inject } from '@angular/core';
import { WeatherService } from 'src/app/service/weather/weather.service';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/class/weather/weather';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges,OnDestroy {
  @Input() city = '';
  subcriptions: Subscription = new Subscription();
  weather: Weather = <Weather> {};
  show:boolean=false

  constructor(@Inject(WeatherService) private weatherService:WeatherService) {}

  ngOnChanges(): void {
    this.show = false
    this.subcriptions.add(this.weatherService.getWeatherByCity(this.city).subscribe((data: any) => {
      this.weather = {
        location: data.location,
        current: data.current
      } as Weather
      this.show = !this.show
    })
    )
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }
}
