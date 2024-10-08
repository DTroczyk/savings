import { Component } from '@angular/core';
import { MONTHS } from 'src/app/constant/months';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrl: './period-selector.component.scss',
})
export class PeriodSelectorComponent {
  public mode: 'year' | 'month' | 'period' = 'month';
  public year: number | 'all' = 'all';
  public month: number | 'all' = 'all';

  public MONTHS = MONTHS;
  public YEARS: number[] = [];

  private MAX_PAST_YEAR_RANGE = 5;

  constructor() {
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
    for (let index = 0; index < this.MAX_PAST_YEAR_RANGE; index++) {
      this.YEARS.push(this.year - index);
    }
    this.month = currentDate.getMonth() + 1;
  }
}
