import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { TABLE_COLUMNS } from './table-columns';

import { Saving } from '../../models/saving';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) public paginator!: MatPaginator;

  public displayedColumns = TABLE_COLUMNS;
  public dataSource = new MatTableDataSource<Saving>([
    {
      id: 1,
      goal: 'TEST',
      description: 'Test description',
      amount: 1000,
      date: '2024-09-19',
    },
  ]);

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
