import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  employeeForm: FormGroup;
  monthOptions=[
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'Jun',
    'July',
  ];
  Savedatalist: any[]=[];
  Jan=0;
  Feb=0;
  March=0;
  April=0;
  May=0;
  June=0;
  July=0;
  expenses: any='';
  month: any='';

  constructor( private fb: FormBuilder, public http:EmployeeService) {
    this.employeeForm = fb.group({});
   }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      expenses: this.fb.control(''),
      month: this.fb.control('default'),
      amount: this.fb.control(''),
      date: this.fb.control(''),
    });
  }
  AddExpenses(){
       this.http.savedata(this.employeeForm.value)
       this.getdata()
       this.clearForm()

  }

  clearForm(){
    this.expenses.setValue('');
    this.month.setValue('');
  }
  
getdata(){
  this.Jan=0
  this.Feb=0
  this.March=0
  this.April=0
  this.May=0
  this.June=0
  
  this.Savedatalist=this.http.getdata()
  console.log('Added',this.Savedatalist)
  this.Savedatalist.forEach(element=>{
   if(element.month==='Jan'){
   this.Jan+=element.amount
      }
    else if(element.month==='Feb'){ 
    this.Feb+=element.amount
    }
    else if(element.month === 'March'){
      this.March+=element.amount
  }
  else if(element.month === 'April'){
    this.April+=element.amount
}
else if(element.month === 'May'){
  this.May+=element.amount
}
   console.log(this.Jan)
  })
}

Delete(index:any){
  this.http.deletedata(index)
  this.getdata()
}
}
