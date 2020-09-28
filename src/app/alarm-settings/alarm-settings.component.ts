import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.css']
})
export class AlarmSettingsComponent implements OnInit {
  myTime;
  moments = [
    {
      name : 'moment1',
      time : ''
    },
  ];
  numberOfMoment = 1 ;
  showMin: boolean = true;
  showSec: boolean = true;
  repeatUi: boolean = false;

  setAlarmForm = new FormGroup({
    eventName : new FormControl(''),
    formTime : new FormControl(new Date()),
    repeat : new FormControl(),
    repeatSecond : new FormControl(),
    repeatHour : new FormControl(),
    repeatMinute : new FormControl(),
  });

  constructor() { }

  ngOnInit() {
    console.log(this.myTime = new Date());
    this.myTime = new Date();
  }

  turnOnRepeatUi(){
    this.repeatUi = true;
  }

  turnOffRepeatUi(){
    this.repeatUi = false;
  }


}
