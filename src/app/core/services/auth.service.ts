import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseURL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }
  register(data: string ) {
    return this.http.post<any>(`${baseURL}/Register`, data).subscribe(value => {
        alert('Regsiter Done')
        this.route.navigate(['login']);
    })
}

  login(data: string){
    console.log(`I am server`)
    return this.http.post<any>(`${baseURL}/Login`, data).subscribe(value => {
      sessionStorage.setItem('islogin', 'true')
      this.route.navigate(['dashboard']);
      
    })
  } 
}
