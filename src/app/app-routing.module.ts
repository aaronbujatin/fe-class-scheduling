import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { CourseClassScheduleComponent } from './components/course-class-schedule/course-class-schedule.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './security/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'schedules', component : SchedulesComponent},
  {path : 'login', component : LoginComponent},
  {path : 'contact', component : ContactComponent},
  {path : 'about', component : AboutComponent},
  {path : 'class-schedules/:course', component : CourseClassScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
