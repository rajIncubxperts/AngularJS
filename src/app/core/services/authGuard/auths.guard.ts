import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth.service';
import { AuthTokenService } from '../auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthsGuard implements CanActivate {
  constructor(private router: Router, private AuthsGuard: AuthService, private authtoken: AuthTokenService) { }  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      const token = this.authtoken.getToken();
      if(token && token !== '') {
        return true;
      }
      this.router.navigate(['./login']);        
      return false;      
  }
  
}
