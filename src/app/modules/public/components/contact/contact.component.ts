import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/core/services/jsonplaceholder/homepageService.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fetched_arr : any = [{}];
  constructor(private httpgetdata: HomePageService) { }

  ngOnInit(): void {
    this.httpgetdata.getData().subscribe((data) => {
      this.fetched_arr =data;
            console.log(data);
          });
  }

}
