import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import {StepperService} from  './stepper/stepper.service';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StepperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
