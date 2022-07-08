import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  tokenKey: string = 'token'
  constructor() { }
  
  setToken(token: string){
    localStorage.setItem(this.tokenKey, token)
  }

  getToken(){
    return localStorage.getItem(this.tokenKey)
  }
  
  clearToken(){
    localStorage.removeItem(this.tokenKey)
  }
}
