import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SavingService } from 'src/app/services/saving.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit, OnDestroy {
  public sum = 0;

  private subs = new Subscription();

  constructor(private savingService: SavingService) {}

  ngOnInit(): void {
    this.subs.add(
      this.savingService.savings$.subscribe((res) => {
        this.sum = 0;
        res.forEach((s) => (this.sum += s.amount));
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
