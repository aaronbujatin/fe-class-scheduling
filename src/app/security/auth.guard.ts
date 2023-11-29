import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService : AuthenticationService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      if (this.authenticationService.getToken !== null){
        // this.authenticationService.isAuthenticated.next(true);
        return true;
      }
      Swal.fire({
        title: 'Error!',
        text: 'Please login to view the schedules',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      
      return false;
  }
  
}