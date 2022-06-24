import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  title = 'Component_Interaction';

  user_arr:any=[];
  getuserrecord(event:any){
    this.user_arr = event;
    console.log("ParentApp:", this.user_arr)
  }

  childData: any;

  edit_form(event:any){
     this.childData = event;
  }
}

