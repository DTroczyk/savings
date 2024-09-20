import { TestBed } from '@angular/core/testing';

import { SavingService } from './saving.service';

describe('SavingService', () => {
  let service: SavingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
