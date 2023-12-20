import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent {

  constructor(private route: ActivatedRoute, private authService: AuthenticationService) { }

  token: string;

  ngOnInit() {
    // Extract the token from the URL
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      // Call the backend to confirm the account
     
    });
  }

  
}
