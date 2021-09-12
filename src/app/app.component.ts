import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['repaymentDate', 'principal', 'interest', 'totalRepayment'];
  amount: number;
  duration :number;
  restrictions;
  dataReady: boolean;
  

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.dataReady = false;
    this.appService.getRestrictions().subscribe((res) => {
      this.restrictions = {
        RCF: {
          amountMin: res.revolving_credit_facility.amount_min,
          amountMax: res.revolving_credit_facility.amount_max,
          durationMin: res.revolving_credit_facility.duration_min,
          durationMax: res.revolving_credit_facility.duration_max
        },
        BL: {
          amountMin: res.business_loan.amount_min,
          amountMax: res.business_loan.amount_max,
          durationMin: res.business_loan.duration_min,
          durationMax: res.business_loan.duration_max
        }
      }
      this.dataReady = true;
    });
  }
}
