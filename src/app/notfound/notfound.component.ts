import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `<p>404 Page not Found</p>`,
  styles: ['p { text-align: center; font-weight: bold; }'],
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
