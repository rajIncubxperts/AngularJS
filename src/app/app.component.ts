import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Directive';
  customer=[
    {id:"1001",firstname:"Raj", lastname:"Chaudhary", zip:"662255", phone:"6622330077"},
    {id:"1002",firstname:"Amey", lastname:"Kapde", zip:"992299", phone:"6622550077"},
    {id:"1003",firstname:"Rohit", lastname:"Sharma", zip:"992299", phone:"7847499044"},
    {id:"1004",firstname:"Dhanu", lastname:"Patil", zip:"992299", phone:"6622550077"},
    {id:"1005",firstname:"Ram", lastname:"Mali", zip:"992299", phone:"6622550077"},
    {id:"1006",firstname:"Shivani", lastname:"Kapde", zip:"556622", phone:"6622550077"},
    {id:"1007",firstname:"Jayeshri", lastname:"Kohli", zip:"556622", phone:"6622550077"},
    {id:"10028", firstname:"Rahul", lastname:"Dhrma", zip:"556622", phone:"6622550077"},
  ]
  display=true;
  hideShowText = 'Hide';

  toggleColumnPreview(){
    this.display= !this.display;
    if(this.display == true)
    {
      this.hideShowText = 'Hide';
    }
    else if(this.display == false)
    {
      this.hideShowText = 'Show';
    }
    
  }

  list:any =
  {
    'background-color':'#1E90FF'
  }
}




