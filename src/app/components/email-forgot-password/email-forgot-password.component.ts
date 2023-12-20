import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-email-forgot-password',
  templateUrl: './email-forgot-password.component.html',
  styleUrls: ['./email-forgot-password.component.css']
})
export class EmailForgotPasswordComponent {

  emailForgotPasswordForm: FormGroup;

  constructor(private authenticationService: AuthenticationService, 
    private formBuilder: FormBuilder, 
    private router : Router, 
    ) {

    this.emailForgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required]]
      
    })
  }

  public onSubmit() {
    if (this.emailForgotPasswordForm.valid) {
      const username = this.emailForgotPasswordForm.value.email;

      // this.authenticationService.login(username, password).subscribe(
      //   (response) => {
      //     const jwt = response.token;
      //     this.authenticationService.isAuthenticated.next(true);
      //     console.log(this.authenticationService.isAuthenticated.value);
          
      //     this.authenticationService.setToken(jwt);
      //     this.router.navigate([''])
      
      //     console.log(response);
      //   }, (error) => {
      //     this.errorLoginAlert()
      //     console.log(error);

      //   }
      // )
    }
 

  }

  errorLoginAlert() {
    Swal.fire({
      text: "Invalid username or password.",
      icon: "error",
      confirmButtonText: "OK",
      showCloseButton: true,
      confirmButtonColor: '#1A56DB',
    });
  }


}
