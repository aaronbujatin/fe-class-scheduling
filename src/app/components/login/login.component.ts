import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, 
    private formBuilder: FormBuilder, 
    private router : Router, 
    ) {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.authenticationService.login(username, password).subscribe(
        (response) => {
          const jwt = response.token;
          this.authenticationService.isAuthenticated.next(true);
          console.log(this.authenticationService.isAuthenticated.value);
          
          this.authenticationService.setToken(jwt);
          this.router.navigate([''])
      
          console.log(response);
        }, (error) => {
          console.log(error);

        }
      )
    }
 

  }

}
