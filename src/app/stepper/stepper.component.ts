import { Component, OnInit } from '@angular/core';
import {StepperService} from './stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  result = [];
  constructor(private stepperService: StepperService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.stepperService.getList().subscribe(
      response=> {
        this.result = response;
        console.log(response);
      }
    );
  }
  
  getDate(date) {
    let dateArr = date.split("-");
    const months = 
    ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    console.log(dateArr);
    return dateArr[2] + " " + months[dateArr[1]-1];
  }

}
