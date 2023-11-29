import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private authenticationService: AuthenticationService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = this.authenticationService.getToken();

        req = this.addToken(req, token);

        return next.handle(req).pipe(
            catchError(
                (err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        console.log(err.status);
                        
                        this.authenticationService.clearLocalStorage()
                        this.router.navigate(['/login']);
                    }

                    return throwError(() => new Error('Something went wrong.'));
                }
            )
        );
    }

    private addToken(request: HttpRequest<any>, token: string) {
        return request.clone(
            {
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

}