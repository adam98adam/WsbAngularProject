import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  country:string = ''
  capital:string = ''
  showWeatherComponent: boolean = false

  setCountry($event: string) {
    this.country = $event
  }

  setCapital($event: string) {
    this.capital = $event
  }

  setShowWeatherComponent($event: boolean) {
    this.showWeatherComponent = $event
  }
}
