import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/addEmployees/add-employee.service';
import { EmployeeService } from 'src/app/core/services/employees/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  // updateForm: any = FormGroup;
  updateForm: FormGroup = new FormGroup({});
  submitted = false;
  // api_id!: any;
  employee_data: any= [];
  url_id!: any;

  constructor(
    private fb: FormBuilder,
    private apiActivated: ActivatedRoute,
    private aService: AddEmployeeService,
    private geteService: EmployeeService,
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required, Validators.minLength(2),
        Validators.maxLength(10), ,Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required,Validators.minLength(2),
        Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$')]],
      mobileNumber: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
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
    // this.employeeUpdate();
 console.log( "code bhcc" , this.getempdata())
  }

  // get f() {
  //   return this.updateForm.controls;
  // }
  get emplUpdated_form() {
    return this.updateForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.updateForm.invalid) {
  //     return;
  //   }

  //   // display form values on success
  //   // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.updateForm.value, null, 4));
  //   alert('SUCCESS!! :-)\n\n');
  // }

  // Reset() {
  //   this.submitted = false;
  //   this.updateForm.reset();
  // }

  employeeUpdate() {
    this.aService.update(this.updateForm.value).subscribe((apiUpdate_date) => {
        // if (apiUpdate_date.result) {
          console.log('Updaate', apiUpdate_date);
        //   alert('Employee List Updated Successfully ');
        // }
        if(apiUpdate_date.result){
          alert("sucessfully updated data");
        }
      
      });
  }
  getempdata() {
    // debugger;
    this.geteService.get().subscribe((get_emp_data) => {
      this.employee_data = get_emp_data.result;

      console.log("I am getting this employee data:", this.employee_data);

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
        }
      }
    });
  }
}
