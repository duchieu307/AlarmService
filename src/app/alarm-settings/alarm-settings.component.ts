import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  modalRef: BsModalRef | null;
  customRepeatUi ;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {}

  createAlarmForm() {
    this.alarmForm = this.formBuilder.group({
      eventName: [''],
      repeat: [false],
      repeatSecond: [0],
      repeatHour: [0],
      repeatMinute: [0],
      formTime: [new Date()],
      repeatDay: [],
      repeatAction: [],
      customRepeat: []
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
    let newObjMoment = {
      name: 'moment' + this.numberOfMoment.length,
      time: this.alarmForm.get('formTime').value.toLocaleTimeString('it-IT'),
    };
    this.numberOfMoment.push(1);
    this.momentsForSaving.push(newObjMoment);
    console.log(this.momentsForSaving);
  }

  openModal(template: TemplateRef<any>) {
    // event.preventDefault();
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    // event.stopPropagation();
  }

  testSwitch(){
    this.customRepeatUi = this.alarmForm.get('customRepeat').value;
    console.log(this.customRepeatUi);
  }

}
