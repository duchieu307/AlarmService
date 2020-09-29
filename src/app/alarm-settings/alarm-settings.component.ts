import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.css'],
})
export class AlarmSettingsComponent implements OnInit {
  myTime;
  momentsForSaving = [];
  numberOfMoment = [1];
  showMin: boolean = true;
  showSec: boolean = true;
  repeatUi: boolean = true;
  alarmForm: FormGroup;

  // setAlarmForm = new FormGroup({
  //   eventName : new FormControl(''),
  //   formTime : new FormControl(new Date()),
  //   repeat : new FormControl(),
  //   repeatSecond : new FormControl(),
  //   repeatHour : new FormControl(),
  //   repeatMinute : new FormControl(),
  // });

  constructor(private formBuilder: FormBuilder) {}

  createAlarmForm() {
    this.alarmForm = this.formBuilder.group({
      eventName: [''],
      repeat: [false],
      repeatSecond: [0],
      repeatHour: [0],
      repeatMinute: [0],
      formTime: [new Date()],
      repeatDay: [],
    });
  }

  ngOnInit() {
    console.log((this.myTime = new Date()));
    this.myTime = new Date();
    this.createAlarmForm();
  }

  turnOnRepeatUi() {
    this.repeatUi = true;
  }

  turnOffRepeatUi() {
    this.repeatUi = false;
  }

  // đang lưu time có cả ngày tháng năm
  addMoment() {
    let newObjMoment= {
      name : 'moment' + this.numberOfMoment.length,
      time : this.alarmForm.get('formTime').value.toLocaleTimeString('it-IT')
    };
    this.numberOfMoment.push(1);
    this.momentsForSaving.push(newObjMoment);
    console.log(this.momentsForSaving);
    
  }


}
