import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/shared/services/currency/currency.service';
import { CURRENCYNAME } from 'src/app/constans/currency.constans';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit, OnDestroy {
  currencyName = CURRENCYNAME;
  isDiasable = true;
  currencyFrom!: string;
  currencyTo!: string;
  value!: number;
  result!: number;
  subscription: Subscription | undefined;
  constructor(private currencyService: CurrencyService) { }
  ngOnDestroy(): void {
    this.currencyService.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

  getInfo(): void {
    this.subscription = this.currencyService.getData(this.currencyFrom, this.currencyTo).subscribe(data => {
      if (data) {
        this.result = this.value * data.result;
        this.isDiasable = false;
      }
    })
  }
}
