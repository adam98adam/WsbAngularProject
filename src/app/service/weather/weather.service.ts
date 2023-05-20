import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherByCity(city: string): Observable<any> {
    const url = 'http://api.weatherapi.com/v1/current.json?key=6fed8bb1bfd24dc090a115944231504&q=' + city + '&aqi=no'
    return this.http.get(url);
  }
}
