import { Component, OnInit, OnDestroy, Output, EventEmitter, Inject} from '@angular/core';
import { CountryService } from 'src/app/service/country/country.service';
import { Country } from '../../class/country/country'
import { Observable, startWith, Subscription, map } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})

export class CountryComponent implements OnInit,OnDestroy {
  @Output() countryEvent = new EventEmitter<string>();
  
  subcriptions = new Subscription();
  myControl = new FormControl('');
  countries: Array<Country>;
  filteredOptions: Observable<Array<Country>>;
  selectedCountry: Country = <Country> {}

  constructor(@Inject(CountryService) private countryService:CountryService) {
    this.countries = new Array<Country>()
    this.filteredOptions = new Observable<Array<Country>>()

  }

  ngOnInit(): void {
    this.subcriptions.add(
      this.countryService.getCountries().subscribe((data: any) => {
        this.countries = data.map((country: any) => {
          return {
            name: country.name,
            flags: country.flags
          } as Country
        });
        this.countries = this.countries.sort((country1,country2) => country1.name.common.localeCompare(country2.name.common))
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        )
      })
    );
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

  private _filter(value: string): Array<Country> {
    const filterValue = value.toLowerCase();
    return this.countries.filter(coutry => coutry.name.common.toLowerCase().includes(filterValue));
  }

  addCountryItem(country: string) {
    this.countryEvent.emit(country)
  }
}
