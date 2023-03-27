import { NgToastService } from 'ng-angular-popup';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router, private toast: NgToastService) {

  }

  canActivate() {
    if (this.auth.IsLoggedIn()) {
      return true;
    }
    this.toast.error({ detail: "Plase login", summary: "You have logged out", duration: 4000 })
    this.router.navigate(['/'])
    return false;
  }

}
