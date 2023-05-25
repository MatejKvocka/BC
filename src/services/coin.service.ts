import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private apiUrl = 'http://localhost:3000/api/coins';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getCoinById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  getCoinYears(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/years`);
}

getCoinCountries(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/countries`);
}
}