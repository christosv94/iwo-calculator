import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InterestTableComponent} from './interest-table/interest-table.component'
import {MatTableModule} from '@angular/material/table';
import { AppModule } from './app.module';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the restriction data', () => {
      expect(component.dataReady).toEqual(true)
  })

});
