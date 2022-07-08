import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpclient: HttpClient) { }
  getData() {
    const placeholder_url = "https://jsonplaceholder.typicode.com/users";
    return this.httpclient.get(placeholder_url);
  }
}

