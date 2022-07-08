import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { baseURL } from 'src/environments/environment';
import { AuthTokenService } from './services/auth-token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router, private authtoken:AuthTokenService) { }
  register(data: string ) {
    return this.http.post<any>(`${baseURL}/Register`, data).subscribe(value => {
        alert('User Regsiter Successfull')
        this.route.navigate(['login']);
    })
}

login(data: string){
  console.log(`I am server`)
  return this.http.post<any>(`${baseURL}/Login`, data).subscribe(value => {
    if(value.result){
      this.authtoken.setToken(value.result)
    }
    sessionStorage.setItem('islogin', 'true')
    alert('User Login Successfull')
    this.route.navigate(['/admin']);
    console.log(value)
    
  })
} 

}
