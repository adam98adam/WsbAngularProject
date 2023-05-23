import { Component, OnInit } from '@angular/core';
import { utils } from 'src/app/class/utils/utils';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  country:string = ''
  capital:string = ''
  showWeatherComponent: boolean = false

  constructor(private util: utils){}

  ngOnInit(): void {
    this.util.redirectToLoginPage()
  }

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
