import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  listdata:any[]=[]
  constructor() { }


  savedata(list:any){
    this.listdata.push(list)
    console.log(this.listdata)
  }
  getdata(){
    return this.listdata
  }
  deletedata(index:any){
    this.listdata.splice(index,1)
  }
}
