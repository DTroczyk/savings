import { Component, OnInit } from '@angular/core';

import { MONTHS } from 'src/app/constant/months';

import { SavingService } from 'src/app/services/saving.service';

@Component({
  selector: 'app-period-selector',
  templateUrl: './period-selector.component.html',
  styleUrl: './period-selector.component.scss',
})
export class PeriodSelectorComponent implements OnInit {
  public mode: 'year' | 'month' | 'period' | 'all' = 'month';
  public year: number;
  public month: number;

  public MONTHS = MONTHS;
  public YEARS: number[] = [];

  private MAX_PAST_YEAR_RANGE = 5;

  constructor(private savingService: SavingService) {
    const currentDate = new Date();
    this.year = currentDate.getFullYear();
    for (let index = 0; index < this.MAX_PAST_YEAR_RANGE; index++) {
      this.YEARS.push(this.year - index);
    }
    this.month = currentDate.getMonth() + 1;
  }

  ngOnInit(): void {
    this.savingService.getSavingsForMonth(this.year, this.month);
  }

  public getSavings() {
    switch (this.mode) {
      case 'year':
        this.savingService.getSavingsForYear(this.year);
        break;
      case 'month':
        this.savingService.getSavingsForMonth(this.year, this.month);
        break;
      case 'period':
        break;
      case 'all':
        this.savingService.getSavingsForAllTime();
        break;
    }
  }
}
