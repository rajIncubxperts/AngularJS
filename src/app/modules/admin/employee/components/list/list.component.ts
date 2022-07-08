import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/addEmployees/add-employee.service';
import { AuthTokenService } from 'src/app/core/services/auth-token.service';
import { EmployeeService } from 'src/app/core/services/employees/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  emplList:any =[{}];
  delEmpl: any=[];

  constructor(private authtoken: AuthTokenService, private router: Router, private eService:EmployeeService, private aService: AddEmployeeService) { }

  ngOnInit(): void {
    // console.log(this.authtoken.getToken())
    this.eService.get().subscribe(array => {
      this.emplList =array;
      console.log("Get Data",this.emplList);
    })
  }
  emplDelete(id:number){
    this.aService.delete(id).subscribe(deldata =>  {
      this.ngOnInit();
      alert("Employee Deleted Successfully")
    })
  }

  emplEdit(id:number){
    this.router.navigate([`admin/employee/update/${id}`])
    // console.log("Edit works")
  }
}
