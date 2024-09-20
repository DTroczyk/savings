import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SavingService } from 'src/app/services/saving.service';

import { Saving } from '../../models/saving';
import { TABLE_COLUMNS } from './table-columns';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  public displayedColumns = TABLE_COLUMNS;
  public dataSource = new MatTableDataSource<Saving>([]);

  private subs = new Subscription();

  constructor(private savingService: SavingService) {}

  ngOnInit(): void {
    this.subs.add(
      this.savingService.savings$.subscribe(
        (res) => (this.dataSource.data = res)
      )
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
