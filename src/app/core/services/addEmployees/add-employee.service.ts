import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthTokenService } from '../auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(public httpClinet: HttpClient, private authtoken: AuthTokenService) { }

  addemp(dataCalled:string) : Observable<any>{
    const headers ={ Authorization : `Bearer ${this.authtoken.getToken()}`}
    return this.httpClinet.post(
      'https://tech-resources-core-api.azurewebsites.net/Employee', dataCalled,
      {headers}
    )
  }

  delete(id:number): Observable<any>{
    const headers = { Authorization : `Bearer ${this.authtoken.getToken()}`}
    return this.httpClinet.delete(
      `https://tech-resources-core-api.azurewebsites.net/Employee/${id}`,
      {headers}
    );
  }

  update(data:string): Observable<any>{
    const headers ={ Authorization : `Bearer ${this.authtoken.getToken()}`}
    return this.httpClinet.put(
      `https://tech-resources-core-api.azurewebsites.net/Employee`,data,{headers}
    )
  }
}
