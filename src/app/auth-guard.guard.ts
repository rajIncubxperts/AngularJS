import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router) { }      
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {      
     if (sessionStorage.getItem('islogin') == 'true') {      
     return true;      
     }      
     // navigate to login page as user is not authenticated      
  this.router.navigate(['login']);        
return false;      
}      
public isLoggedIn() {      
  let status = false;      
  if (localStorage.getItem('isLoggedIn') == "true") {      
     status = true
}
}
}