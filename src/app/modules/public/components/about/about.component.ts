import { Component, OnInit } from '@angular/core';
import { HomePageService } from 'src/app/core/services/jsonplaceholder/homepageService.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data_fetched : any = [{}];


  constructor(private httpgetdata: HomePageService,) { }

  ngOnInit(): void {
    this.httpgetdata.getData().subscribe((data) => {
this.data_fetched =data;
      console.log(data);
    });
  }

}
