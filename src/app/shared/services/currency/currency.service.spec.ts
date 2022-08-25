import { TestBed } from '@angular/core/testing';

import { BodyService } from './currency.service';

describe('BodyService', () => {
  let service: BodyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
