import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  @Input() list_arr:any;
  ngOnInit(): void {
  }

}
