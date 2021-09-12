import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

 interface Record {
  repaymentDate;
  principal;
  interest;
  totalRepayment;
}

@Component({
  selector: 'app-interest-table',
  templateUrl: './interest-table.component.html',
  styleUrls: ['./interest-table.component.css']
})
export class InterestTableComponent implements OnInit {
  displayedColumns: string[] = ['repaymentDate', 'principal', 'interest', 'totalRepayment'];
  dataSource;
  @Input() amount: number;
  @Input() duration: number;
  @Input() calculatorType: string;
  @Input() restrictions;
  interestInput;
  restrictionsError = false;


  constructor() { }

  ngOnInit() {
  }

  calculateInterest() {

    if (
      this.amount < this.restrictions.amountMin ||
      this.amount > this.restrictions.amountMax ||
      this.duration < this.restrictions.durationMin ||
      this.duration > this.restrictions.durationMax
      ) {
          this.restrictionsError = true;
          return;
      }

    this.restrictionsError = false;
    let ELEMENT_DATA: Record[] = []

    let repaymentDate: Date;
    let interest: number;
    let principal: number;
    let totalRepayment: number;

    let interestSum = 0;
    let repaymentSum = 0;

    for (let i = 0; i < this.duration; i++) {
      repaymentDate = i === 0 ? new Date() : new Date(repaymentDate.setMonth(repaymentDate.getMonth() + 1));
      principal = Math.floor(this.amount / this.duration);
      interest = Math.floor((this.amount - (i * principal)) * (this.interestInput / 100));
      interest  = this.calculatorType === 'BL' && i == 0 ? Math.floor(interest + this.amount / 10) : interest;
      totalRepayment = principal + interest
      
      repaymentSum = repaymentSum + totalRepayment;
      interestSum = interestSum + interest;

      ELEMENT_DATA.push({
        repaymentDate: repaymentDate.toLocaleDateString(),
        principal: principal,
        interest: interest,
        totalRepayment: totalRepayment
      })
    }

      ELEMENT_DATA.push({
        repaymentDate: 'Total',
        principal: Math.floor(this.amount),
        interest: interestSum,
        totalRepayment: repaymentSum
      })
    this.dataSource = ELEMENT_DATA;
  }

}
