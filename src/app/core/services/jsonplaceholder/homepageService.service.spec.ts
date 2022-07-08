import { TestBed } from '@angular/core/testing';

import { HomePageService } from './homepageService.service';

describe('UpdateEmployeeService', () => {
  let service: HomePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
