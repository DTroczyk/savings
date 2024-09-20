import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Environment } from '../Environment/environment';
import { Saving } from '../models/saving';

@Injectable({
  providedIn: 'root',
})
export class SavingService {
  private apiUrl = Environment.apiUrl;

  private savingsList = new BehaviorSubject<Saving[]>([]);

  public get savings$() {
    return this.savingsList.asObservable();
  }

  constructor(private http: HttpClient) {}

  public getSavingsForMonth(year: number, month: number): void {
    this.http
      .get<Saving[]>(this.apiUrl + `savings/${year}/${month}`)
      .subscribe({
        next: (res) => {
          this.savingsList.next(res);
        },
      });
  }

  public getSavingsForYear(year: number): void {
    this.http.get<Saving[]>(this.apiUrl + `savings/${year}`).subscribe({
      next: (res) => {
        this.savingsList.next(res);
      },
    });
  }

  public getSavingsForAllTime(): void {
    this.http.get<Saving[]>(this.apiUrl + `savings/get-all`).subscribe({
      next: (res) => {
        this.savingsList.next(res);
      },
    });
  }
}
