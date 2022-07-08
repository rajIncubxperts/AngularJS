import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/addEmployees/add-employee.service';
import { AuthTokenService } from 'src/app/core/services/auth-token.service';
import { EmployeeService } from 'src/app/core/services/employees/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  
  emplList:any =[];
  delEmpl: any=[];

  constructor(private authtoken: AuthTokenService, private router: Router, private eService:EmployeeService, private aService: AddEmployeeService ) { }

  ngOnInit(): void {
    console.log(this.authtoken.getToken())

    this.eService.get().subscribe((array) => {
      this.emplList =array
      console.log(array)
    })

  }
  logout(){
    this.authtoken.clearToken();
    console.log("hgvdc");
    this.router.navigate(['./login'])
  }
}
