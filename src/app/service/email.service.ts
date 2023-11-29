import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient : HttpClient) { }

  private readonly LOCAL_API = "http://localhost:8080";
  private readonly DEPLOY_API = "https://good-hole-production.up.railway.app";
  sendContactForm(contactForm){
    return this.httpClient.post(`${this.DEPLOY_API}/api/v1/emails`, contactForm)
  }
}
