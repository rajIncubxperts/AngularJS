import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-component-first',
  templateUrl: './child-component-first.component.html',
  styleUrls: ['./child-component-first.component.scss']
})
export class ChildComponentFirstComponent implements OnInit {

  @Input() childData : any;
  @Output() form_arr:EventEmitter<any> = new EventEmitter();
 
  rajForm: FormGroup;
  listData: any = [];

  constructor(private fb: FormBuilder) {

    this.listData = [];

    this.rajForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
    })

  }
  
  ngOnInit(){
  }
  
  AddData() {
    this.listData.push(this.rajForm.value);
    this.form_arr.emit(this.listData);
    this.rajForm.reset();
  }

  Clear() {
    this.rajForm.reset();
  }

  ngOnChanges() {
      this.editFill(this.childData);
  }

  editFill(p: any) {
    this.rajForm.controls['firstName'].setValue(p.firstName);
    this.rajForm.controls['lastName'].setValue(p.lastName);
    this.rajForm.controls['date'].setValue(p.date);
    this.rajForm.controls['gender'].setValue(p.gender);
    this.rajForm.updateValueAndValidity();
  }
 
}
