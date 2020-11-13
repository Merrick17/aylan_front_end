import { TestBed } from '@angular/core/testing';

import { TestamonielService } from './testamoniel.service';

describe('TestamonielService', () => {
  let service: TestamonielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestamonielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
