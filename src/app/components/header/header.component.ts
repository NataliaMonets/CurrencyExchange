import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { CURRENCYNAME } from 'src/app/constans/currency.constans';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  USDrate!: number;
  EURrate!: number;
  currentDate = new Date().toLocaleDateString();
  subscription: Subscription | undefined;
  currencyName = CURRENCYNAME;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getInfo();
  }

  ngOnDestroy(): void {
    this.currencyService.subscription.unsubscribe();
  }

  getInfo(): void {
    this.subscription = this.currencyService.getUAHexchangeRate(this.currentDate, 'USD', 'UAH').subscribe(data => {
      if (data) {
        this.USDrate = data.rates.UAH;
      }
    })
    this.subscription = this.currencyService.getUAHexchangeRate(this.currentDate, 'EUR', 'UAH').subscribe(data => {
      if (data) {
        this.EURrate = data.rates.UAH;
      }
    })
  }

}
