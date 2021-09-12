import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { InterestTableComponent } from './interest-table/interest-table.component';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service'
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [
    AppComponent,
    InterestTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
