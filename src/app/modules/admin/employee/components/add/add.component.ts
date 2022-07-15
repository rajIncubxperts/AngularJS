import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/Employees/add-employee.service';
import { AuthTokenService } from 'src/app/core/services/auth-token.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  reactiveForm: any = FormGroup;
  empList: any = [];
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authtoken: AuthTokenService,
    private router: Router,
    private aService: AddEmployeeService
  ) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
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
      isActive: [true],
    });
  }

  get f() {
    return this.reactiveForm.controls;
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.reactiveForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.reactiveForm.value, null, 4));
    this.aService.addemp(this.reactiveForm.value).subscribe(
      (adata) => {
        console.log(adata);
        alert('Employee Added Successfully');
      },
      (err) => {
        alert('Something Went Wrong');
      }
    );
  }

  Reset() {
    this.submitted = false;
    this.reactiveForm.reset();
  }
}
