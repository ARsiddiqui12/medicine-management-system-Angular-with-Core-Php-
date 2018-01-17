import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user:UserService,private router:Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     
     let check = this.user.getUserLoggedIn();

    if (check==false) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }

  }
}
