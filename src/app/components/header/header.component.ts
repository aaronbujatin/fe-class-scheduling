import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modal } from 'flowbite';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup;


  constructor(public authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // this.authenticated = this.authenticationService.isAuthenticated.value
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })




  }
  ngOnInit(): void {

    const bool = this.authenticationService.isAuthenticated.value
    console.log(bool);
    
    this.authenticationService.getUserDetails().subscribe(
      (response) => {
        this.authenticationService.isAuthenticated.next(true);
        console.log(response);
      }, (error) => {
        console.log(error);

      }
    )

    // const token = this.authenticationService.getToken();

    // if (token) {
    //   this.authenticationService.isAuthenticated.next(true)
    // } else {
    //   this.authenticated = false;
    // }



    // console.log(this.authenticated);
    // console.log(this.authenticationService.isAuthenticated.value);


  }
  authenticated: boolean


  public logout() {
    this.authenticationService.clearLocalStorage();
    this.router.navigate([''])
    this.ngOnInit()

  }




}
