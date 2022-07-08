import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthTokenService } from '../auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  users: any;

  constructor(private httpClinet: HttpClient, private authtoken: AuthTokenService) { }

  get(){
    const headers ={ Authorization : `Bearer ${this.authtoken.getToken()}`}
    return this.httpClinet.get<any>(
      'https://tech-resources-core-api.azurewebsites.net/Employee',
      {headers}
    )
  }
}
