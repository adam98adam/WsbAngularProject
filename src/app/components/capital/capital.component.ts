import { Component, Input, Output, OnDestroy, OnChanges, EventEmitter, Inject } from '@angular/core';
import { CountryService } from 'src/app/service/country/country.service';
import { Subscription } from 'rxjs';
import { CountryCapital } from 'src/app/class/country/country_capital';

@Component({
  selector: 'capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnChanges,OnDestroy {
  @Input() country = '';
  @Output() capitalEvent = new EventEmitter<string>();
  @Output() showEvent = new EventEmitter<boolean>();

  subcriptions = new Subscription();
  show:boolean=false
  capital: CountryCapital = <CountryCapital> {}

  constructor(@Inject(CountryService) private countryService:CountryService) {}

  ngOnChanges(): void {
    this.show = false
    this.addShowItem(this.show)
    this.subcriptions.add(
      this.countryService.getCapitalByCountry(this.country).subscribe((data: any) => {
        this.capital = {
          name: data.data.name,
          capital: data.data.capital
        } as CountryCapital
        this.show = !this.show
        this.addShowItem(this.show)
        this.addCapitalItem(this.capital.capital)
      })
      )
  }

  addCapitalItem(capital: string) {
    this.capitalEvent.emit(capital)
  }

  addShowItem(show: boolean) {
    this.showEvent.emit(show)
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }
}
