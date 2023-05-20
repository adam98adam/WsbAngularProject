import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http:HttpClient) { }

  getCountries(): Observable<any> {
    const url = 'https://restcountries.com/v3.1/region/europe';
    return this.http.get(url);
  }

  getCapitalByCountry(country: string): Observable<any> {
    const url = 'https://countriesnow.space/api/v0.1/countries/capital'
    return this.http.post(url, {"country": country});
  }
}
