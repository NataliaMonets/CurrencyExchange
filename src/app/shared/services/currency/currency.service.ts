import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private resourceUrl!: string;
  subscription: any;
  constructor(private http: HttpClient) {
    this.resourceUrl = 'https://api.exchangerate.host/';
  }

  getData(from: string, to: string): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}convert?from=${from}&to=${to}`);
  }

  getUAHexchangeRate(date: string, base: string, to: string): Observable<any> {
    return this.http.get<any>(`${this.resourceUrl}${date}?base=${base}&symbols=${to}`);
  }
}
