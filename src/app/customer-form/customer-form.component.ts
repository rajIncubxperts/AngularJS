import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { bloodgEnum } from '../modelArr/bloodArr';
import { tshirtSizes } from '../modelArr/tshirtArr';
import { emailValidator } from './email-validator.directive';


interface IUser {
  Expertise: any;
  email: string;
  employesN: number;
  firstName: string;
  lastName: string;
  MobilePhone:number;
  Maritalstatus:string;
  BloodGroup:string;
  JD: string;
AboutMe: string;
Department: string;
Location: string;
Workphone: string;
Revision: string;
DOJ:number;
age:number;
Shirt:string;
Relevance:string;
Address: string;
Company: string;
Title: string;
from: number;
to: number;
pAddress:string;
Tags:string;
BirthDate: number;

}

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  customerForm: FormGroup;
  ages = 0;
  user: IUser;
  bloodGArr =bloodgEnum;
  tshirtArr =tshirtSizes;
  Submitted = false;
  constructor(private fb: FormBuilder) { 
    this.user = {} as IUser;

    this.customerForm = fb.group({});
  }

  ngOnInit(): void {  
    this.customerForm= new FormGroup({
  
      employesN: new FormControl(this.user.employesN, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(6),
      ]),
      firstName: new FormControl(this.user.firstName,[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(this.user.lastName, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      MobilePhone: new FormControl(this.user.MobilePhone,[Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
        emailValidator(),
      ]),
      Maritalstatus: new FormControl(this.user.Maritalstatus, [Validators.required]),
      aliases: this.fb.array([
        this.fb.control('')
      ]),
      BloodGroup: new FormControl(this.user.BloodGroup, [Validators.required]),
      Shirt: new FormControl(this.user.Shirt, [Validators.required]),
      Relevance: new FormControl(this.user.Relevance, [Validators.required]),
      JD: new FormControl(this.user.JD, [Validators.required]),
      AboutMe: new FormControl(this.user.AboutMe, [Validators.required]),
      Department: new FormControl(this.user.Department, [Validators.required]),
      Location: new FormControl(this.user.Location, [Validators.required]),
      Workphone: new FormControl(this.user.Workphone, [Validators.required]),
      Revision: new FormControl(this.user.Revision, [Validators.required]),
      DOJ: new FormControl(this.user.DOJ, [Validators.required]),
      age: new FormControl(this.user.age, [Validators.required]),
      Expertise: new FormControl(this.user.Expertise, [Validators.required]),
      Company: new FormControl(this.user.Company, [Validators.required]),
      Title: new FormControl(this.user.Title, [Validators.required]),
      from: new FormControl(this.user.from, [Validators.required]),
      to: new FormControl(this.user.to, [Validators.required]),
      pAddress: new FormControl(this.user.pAddress, [Validators.required]),
      Tags: new FormControl(this.user.Tags, [Validators.required]),
      Address: new FormControl(this.user.Tags, [Validators.required]),
      BirthDate: new FormControl(this.user.Tags, [Validators.required]),
      
    })
  }
  
  get aliases() {
    return this.customerForm.get('aliases') as FormArray;
  }

  get employessName() {
    return this.customerForm.controls;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
    console.log("Added", this.aliases)
  }

  get myForm() {
    return this.customerForm.controls;
  }
  get Company() {
    return this.customerForm.get('BirthDate')!;
  }
  get BirthDate() {
    return this.customerForm.get('Company')!;
  }

  get pAddress() {
    return this.customerForm.get('pAddress')!;
  }

  get Tags() {
    return this.customerForm.get('Tags')!;
  }
  get Title() {
    return this.customerForm.get('Title')!;
  }

  get from() {
    return this.customerForm.get('from')!;
  }

  get to() {
    return this.customerForm.get('to')!;
  }

  get MobilePhone() {
    return this.customerForm.get('MobilePhone')!;
  }
  get employesN() {
    return this.customerForm.get('employesN')!;
  }
  get firstName() {
    return this.customerForm.get('firstName')!;
  }
  get lastName() {
    return this.customerForm.get('lastName')!;
  }
  get email() {
    return this.customerForm.get('email')!;
  }
  get Maritalstatus() {
    return this.customerForm.get('Maritalstatus')!;
  }
  get BloodGroup() {
    return this.customerForm.get('BloodGroup')!;
  }
  get Shirt() {
    return this.customerForm.get('BloodGroup')!;
  }
  get Relevance() {
    return this.customerForm.get('Relevance')!;
  }

  get JD() {
    return this.customerForm.get('JD')!;
  }

  get AboutMe() {
    return this.customerForm.get('AboutMe')!;
  }

  get Department() {
    return this.customerForm.get('Department')!;
  }

  get Workphone() {
    return this.customerForm.get('Workphone')!;
  }

  get Location() {
    return this.customerForm.get('Location')!;
  }
  get Address() {
    return this.customerForm.get('Address')!;
  }

  get Revision() {
    return this.customerForm.get('Revision')!;
  }

  get DOJ() {
    return this.customerForm.get('DOJ')!;
  }

  get age() {
    return this.customerForm.get('age')!;
  }

  get Expertise() {
    return this.customerForm.get('Expertise')!;
  }
  onSubmit(){
    if (this.customerForm.valid) {
      // save data
  } else {
      this.validateAllFields(this.customerForm); 
      console.log(this.customerForm.value)
 
}

}
validateAllFields(formGroup: FormGroup) {         
  Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);            
      if (control instanceof FormControl) {             
          control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
          this.validateAllFields(control);  
      }
  });
}

ageCalculate(){
  let currentYear = new Date();
  let dob = new Date(this.customerForm.value.birthdate);
  let year = dob.getFullYear();
  let currentYearValue = currentYear.getFullYear()
  this.ages = currentYearValue-year;
}

onReset() {
  this.Submitted = false;
  this.customerForm.reset();
}
}