import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogindata: any;

  constructor() { }

  ngOnInit(): void {
   this.isLogindata = sessionStorage.getItem('islogin')
    console.log(this.isLogindata)
  }
clear(){
  sessionStorage.clear()
}
}
