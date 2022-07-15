import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddEmployeeService } from 'src/app/core/services/Employees/add-employee.service';
import { AuthTokenService } from 'src/app/core/services/auth-token.service';

import swal from 'sweetalert';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  emplList:any =[{}];
  delEmpl: any=[];

  constructor(private authtoken: AuthTokenService, private router: Router,  private aService: AddEmployeeService) { }

  ngOnInit(): void {
    this.aService.get().subscribe(array => {
      this.emplList =array;
      console.log('Get Data', this.emplList);
    })
  }
  emplDelete(id:number){
    this.aService.delete(id).subscribe(deldata =>  {
      swal({
        title: "Are you sure you want to delete?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        // buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Record Deleted Successful!", {
            icon: "success",
          });
        } else {
          swal("Something went wrong");
        }
        this.ngOnInit();
      });
     
    })
  }

  emplEdit(id:number){
    this.router.navigate([`admin/employee/update/${id}`])
  }
}
