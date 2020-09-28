import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.css'],
})
export class AlarmSettingsComponent implements OnInit {
  myTime;
  moments = [
    {
      name: 'moment1',
      time: '',
    },
  ];
  numberOfMoment = 1;
  showMin: boolean = true;
  showSec: boolean = true;
  repeatUi: boolean = false;
  alarmForm: FormGroup;

  // setAlarmForm = new FormGroup({
  //   eventName : new FormControl(''),
  //   formTime : new FormControl(new Date()),
  //   repeat : new FormControl(),
  //   repeatSecond : new FormControl(),
  //   repeatHour : new FormControl(),
  //   repeatMinute : new FormControl(),
  // });
  createAlarmForm() {
    this.alarmForm = this.formBuilder.group({
      eventName: [''],
      repeat: [false],
      repeatSecond: [0],
      repeatHour: [0],
      repeatMinute: [0],
      formTime: [new Date()],
    });
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    console.log((this.myTime = new Date()));
    this.myTime = new Date();
    this.createAlarmForm()
  }

  turnOnRepeatUi() {
    this.repeatUi = true;
  }

  turnOffRepeatUi() {
    this.repeatUi = false;
  }
}
