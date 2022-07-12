import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-user',
  template:`<p>
  Requested for user with id {{userid}}</p>`
})
export class UserComponent  {
  userid!:string | null;  

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.userid = params.get('id')
    })
  }

}
