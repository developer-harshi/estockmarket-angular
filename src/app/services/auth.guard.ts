import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthguardService,
    private router: Router) { }
canActivate()
     {
    var isAuthenticated = this.authService.gettoken();
    console.log(isAuthenticated);
    if (!isAuthenticated) {
        this.router.navigate(['/login']);
    }
    return isAuthenticated;
}
}
