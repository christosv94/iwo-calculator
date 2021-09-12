import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';




describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('restrictions API should return data in the correct format', () => {
    const service: AppService = TestBed.get(AppService);
    service.getRestrictions().subscribe((res) => {
      expect(Object.keys(res).indexOf('revolving_credit_facility')).toBeGreaterThan(-1);
      expect(Object.keys(res).indexOf('business_loan')).toBeGreaterThan(-1);

      expect(Object.keys(res.revolving_credit_facility).indexOf('amount_min')).toBeGreaterThan(-1);
      expect(Object.keys(res.revolving_credit_facility).indexOf('amount_max')).toBeGreaterThan(-1);
      expect(Object.keys(res.revolving_credit_facility).indexOf('duration_min')).toBeGreaterThan(-1);
      expect(Object.keys(res.revolving_credit_facility).indexOf('duration_max')).toBeGreaterThan(-1);

      expect(Object.keys(res.business_loan).indexOf('amount_min')).toBeGreaterThan(-1);
      expect(Object.keys(res.business_loan).indexOf('amount_max')).toBeGreaterThan(-1);
      expect(Object.keys(res.business_loan).indexOf('duration_min')).toBeGreaterThan(-1);
      expect(Object.keys(res.business_loan).indexOf('duration_max')).toBeGreaterThan(-1);
    });
  });
});
