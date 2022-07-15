import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/Employees/add-employee.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({});
  submitted = false;
  employee_data: any= [];
  url_id!: any;

  constructor(
    private fb: FormBuilder,
    private apiActivated: ActivatedRoute,
    private aService: AddEmployeeService,
    
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.minLength(2),
        Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: [
        '',
        [Validators.required, Validators.minLength(1),
          Validators.maxLength(10),Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      location: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      department: ['', [Validators.required]],
      jobDesc: ['', [Validators.required]],
      aboutme: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]],
      joiningDate: ['', [Validators.required]],
      isActive: [true]
    });

    this.url_id = this.apiActivated.snapshot.paramMap.get('id');
    this.employeeUpdate()
    console.log( "code bhcc" , this.getempdata())
  }


  get emplUpdated_form() {
    return this.updateForm.controls;
  }

  employeeUpdate() {
    this.aService.update(this.updateForm.value).subscribe((apiUpdate_date) => {
          console.log('Updaate', apiUpdate_date);
        if(apiUpdate_date.result){
          alert("Update Successful!");
        }
      
      });
  }
  getempdata() {
    // debugger;
    this.aService.get().subscribe((get_emp_data) => {
      this.employee_data = get_emp_data.result;

      for (let i = 0; i < this.employee_data.length; i++) {
        console.log("Employee madhla ID", this.employee_data[i].id);

        if (this.url_id == this.employee_data[i].id) {
          this.updateForm.controls['id'].patchValue(this.employee_data[i].id);

          this.updateForm.controls['firstName'].patchValue(
            this.employee_data[i].firstName
          );

          this.updateForm.controls['lastName'].patchValue(
            this.employee_data[i].lastName
          );
          this.updateForm.controls['department'].patchValue(
            this.employee_data[i].department
            
          );

          this.updateForm.controls['location'].patchValue(
            this.employee_data[i].location
            
          );
          
          this.updateForm.controls['aboutme'].patchValue(
            this.employee_data[i].aboutme
            
          );
          this.updateForm.controls['mobileNumber'].patchValue(
            this.employee_data[i].mobileNumber
            
          );
          this.updateForm.controls['joiningDate'].patchValue(
            this.employee_data[i].joiningDate
          );

          this.updateForm.controls['bloodGroup'].patchValue(
            this.employee_data[i].bloodGroup
          );

          this.updateForm.controls['jobDesc'].patchValue(
            this.employee_data[i].jobDesc
          );
        }
      }
    });
  }
}
