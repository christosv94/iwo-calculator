import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestTableComponent } from './interest-table.component';
import { AppModule } from '../app.module';



describe('InterestTableComponent', () => {
  let component: InterestTableComponent;
  let fixture: ComponentFixture<InterestTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should raise an error if amount is out of limits', () => {

    //initialise data
    component.restrictions = {amountMin: 1000, amountMax:2000};

    component.amount = 500;
    component.calculateInterest();
    expect(component.restrictionsError).toBeTruthy();

    component.amount = 2500;
    component.calculateInterest();
    expect(component.restrictionsError).toBeTruthy();

    component.amount = 1500;
    component.calculateInterest();
    expect(component.restrictionsError).toBeFalsy()
  });

  it('should raise an error if duration is out of limits', () => {

    //initialise data
    component.restrictions = {durationMin: 2, durationMax:5};

    component.duration = 1;
    component.calculateInterest();
    expect(component.restrictionsError).toBeTruthy();

    component.duration = 6;
    component.calculateInterest();
    expect(component.restrictionsError).toBeTruthy();

    component.duration = 3;
    component.calculateInterest();
    expect(component.restrictionsError).toBeFalsy()
  });

  it('RCF should generate the correct table for an amount of £10000, a duration of 4 months and interest of 3%', () => {
    //initialise data
    component.calculatorType = 'RCF';
    component.amount = 10000;
    component.duration = 4;
    component.interestInput = 3
    component.restrictions = {
      amountMin: 1000,
      amountMax: 150000,
      durationMin: 1,
      durationMax: 12
    };

    component.calculateInterest();
    expect(component.dataSource[0].principal).toEqual(2500);
    expect(component.dataSource[0].interest).toEqual(300);
    expect(component.dataSource[0].totalRepayment).toEqual(2800);

    expect(component.dataSource[1].principal).toEqual(2500);
    expect(component.dataSource[1].interest).toEqual(225);
    expect(component.dataSource[1].totalRepayment).toEqual(2725);

    expect(component.dataSource[2].principal).toEqual(2500);
    expect(component.dataSource[2].interest).toEqual(150);
    expect(component.dataSource[2].totalRepayment).toEqual(2650);

    expect(component.dataSource[3].principal).toEqual(2500);
    expect(component.dataSource[3].interest).toEqual(75);
    expect(component.dataSource[3].totalRepayment).toEqual(2575);

    expect(component.dataSource[4].principal).toEqual(10000);
    expect(component.dataSource[4].interest).toEqual(750);
    expect(component.dataSource[4].totalRepayment).toEqual(10750);


  })

  it('BL should generate the correct table for an amount of £10000, a duration of 4 months and interest of 3%', () => {
    //initialise data
    component.calculatorType = 'BL';
    component.amount = 10000;
    component.duration = 4;
    component.interestInput = 3
    component.restrictions = {
      amountMin: 1000,
      amountMax: 200000,
      durationMin: 1,
      durationMax: 60
    };

    component.calculateInterest();
    expect(component.dataSource[0].principal).toEqual(2500);
    expect(component.dataSource[0].interest).toEqual(1300);
    expect(component.dataSource[0].totalRepayment).toEqual(3800);

    expect(component.dataSource[1].principal).toEqual(2500);
    expect(component.dataSource[1].interest).toEqual(225);
    expect(component.dataSource[1].totalRepayment).toEqual(2725);

    expect(component.dataSource[2].principal).toEqual(2500);
    expect(component.dataSource[2].interest).toEqual(150);
    expect(component.dataSource[2].totalRepayment).toEqual(2650);

    expect(component.dataSource[3].principal).toEqual(2500);
    expect(component.dataSource[3].interest).toEqual(75);
    expect(component.dataSource[3].totalRepayment).toEqual(2575);

    expect(component.dataSource[4].principal).toEqual(10000);
    expect(component.dataSource[4].interest).toEqual(1750);
    expect(component.dataSource[4].totalRepayment).toEqual(11750);

  })

});
