import { Injectable } from '@angular/core'
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router'
import { JwtHelperService } from '@auth0/angular-jwt'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public jwtHelper: JwtHelperService, public router: Router) {}
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/'])
      return false
    }
    return true
  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token')
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token)
  }
}
