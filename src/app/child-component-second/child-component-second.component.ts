import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component-second',
  templateUrl: './child-component-second.component.html',
  styleUrls: ['./child-component-second.component.scss']
})
export class ChildComponentSecondComponent implements OnInit {

  @Input() user_arr : any=[];
  @Output() child2:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(){
    
  }
 
  delete(element: any) {
    this.user_arr.forEach((value: any, index: any) => {
      if (value == element)
        this.user_arr.splice(index, 1)
    })

  }

  editFill(p: any) {
    this.child2.emit(p);
  }
}
