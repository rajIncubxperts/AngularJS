import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
        
})
export class FormComponent implements OnInit {
  
  age: any;
  showAge: any;

  arr = {
    firstName:"",
    lastName:"",
    email:"",
    mobileNo:"",
  }
  agecaltin(){
      if(this.age){
        const convertAge = new Date(this.age);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
        this.showAge =  'Your Age would be: ' + Math.floor((timeDiff / (1000 * 3600 * 24))/365);

  } 
  console.log(this.showAge)
}

data(){
  if(this.arr.firstName != '' || this.arr.lastName != '' || this.arr.email != '' ||this.arr.mobileNo != ''){
    alert(`FirstName: ${this.arr.firstName} \n 
    LastName: ${this.arr.lastName} \n
     Email: ${this.arr.email} \n
     Mobile NO.: ${this.arr.mobileNo}`)
  }else{
    alert('Please fill the data')

  }


  console.log(this.arr)

}
  constructor() { }

  ngOnInit(): void {
  }

}
