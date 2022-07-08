import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/core/services/jsonplaceholder/homepageService.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contact_arr :any =[{}];
  constructor(private httpgetdata: HomePageService) { }

  ngOnInit(): void {
    this.httpgetdata.getData().subscribe((data) => {
      this.contact_arr =data;
            console.log(data);
    })
  }

}
