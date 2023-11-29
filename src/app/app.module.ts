import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { FooterComponent } from './components/footer/footer.component';
import { CourseClassScheduleComponent } from './components/course-class-schedule/course-class-schedule.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './security/auth-interceptor';
import { AuthGuard } from './security/auth.guard';
import { TimeFormatPipe } from './time-format.pipe';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SchedulesComponent,
    FooterComponent,
    CourseClassScheduleComponent,
    HomeComponent,
    LoginComponent,
    TimeFormatPipe,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()

  ],
  providers: [
    AuthGuard, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
