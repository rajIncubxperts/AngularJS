import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
template:`<h2 *ngFor="let u of users" (click)="getid(u.id)">{{u.name}}</h2>
 `
})
export class UsersComponent implements OnInit {

  users= [
    {id:'256367', name:'Pratik Shaarmaa'},
    {id:'006677', name:'Neharika Shaarmaa'},
    {id:'778899', name:'Amey Shaarmaa'}
  ]

  constructor(private router:Router) { }

  getid(myid:string){
    //user/655338
    this.router.navigate(['/user',myid])
  }

  ngOnInit(): void {
  }

}
