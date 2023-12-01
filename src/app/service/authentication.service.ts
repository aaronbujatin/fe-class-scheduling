import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  static isAuthenticated: any;

  constructor(private httpClient: HttpClient) { }

  private readonly LOCAL_API = "http://localhost:8080";
  private readonly DEPLOY_API = environment.apiUrl
  isAuthenticated = new BehaviorSubject<boolean>(false);

  requestHeaders = new HttpHeaders(
    { "No-Auth": "True" }
  );

  public login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.httpClient.post(`${this.DEPLOY_API}/api/v1/auth/signin`, body, { headers: this.requestHeaders })
  }


  public setToken(jwt: string) {
    localStorage.setItem("JWT", jwt);
  }

  public getToken(): string {
    return localStorage.getItem("JWT");

  }

  public clearLocalStorage() {
    this.isAuthenticated.next(false);
    localStorage.clear();
  }

  public getUserDetails() {
    const token = localStorage.getItem("JWT");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.get(`${this.DEPLOY_API}/api/v1/users`, { headers });

  }

  public isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticated.asObservable();
  }

  // public getAuthentication(){
  //   const token = localStorage.getItem("JWT");
  //   const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
  //   return this.httpClient.get(`${this.LOCAL_API}/api/v1/users/test`,  { headers });
  // }




}
