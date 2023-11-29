import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/model/schedule.model';
import { User } from 'src/app/model/user.model';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ScheduleService } from 'src/app/service/schedule.service';

@Component({
  selector: 'app-course-class-schedule',
  templateUrl: './course-class-schedule.component.html',
  styleUrls: ['./course-class-schedule.component.css']
})
export class CourseClassScheduleComponent implements OnInit {

  constructor(private scheduleService: ScheduleService,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  user = new User
  params: string
  course: string
  isUserAuthenticated : false
  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe(params => this.getScheduleByInstructorNameAndCourse(params['course']))
    this.activatedRoute.params.subscribe(params => {
      this.params = params[('course')];
    })

    if (this.params === 'BSIT') {
      this.course = "Bachelor of Science In Information Technology";
    } else if (this.params === 'BSCPE') {
      this.course = "Bachelor of Science in Computer Engineering"
    } else if (this.params === 'BEEd-ECED') {
      this.course = "Bachelor of Early Childhood Education"
    } else if (this.params === 'BSEd-SCI') {
      this.course = "Bachelor of Secondary Education major in Science"
    } else if (this.params === 'BEEd-GEN') {
      this.course = "Bachelor of Elementary Education - Generalist"
    } else if (this.params === 'BSBA-HRM') {
      this.course = "Bachelor of Science in Business Administration Major in Human Resource Management"
    } else if (this.params === 'BSE') {
      this.course = "Bachelor of Science in Entrepreneurship"
    }

    

  }



  instructorName: string
  courseSelected: string


  public getAuthenticatedUser() {
    this.authenticationService.getUserDetails().subscribe(
      (response: User) => {
        this.instructorName = response.name;
        console.log(this.instructorName);
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    )
  }

  schedules : Schedule[] 
  public getScheduleByInstructorNameAndCourse(course: string) {
    this.authenticationService.getUserDetails().subscribe(
      (response: User) => {
        this.instructorName = response.name;
        console.log(this.instructorName);
        this.scheduleService.getScheduleByInstructorNameAndCourse(this.instructorName, course).subscribe(
          (response : Schedule[]) => {
            this.schedules = response
            console.log(this.schedules);
          }, (error) => {
            console.log(error);
          }
        )
      }, (error) => {
        console.log(error);
      }
    )
  }

  isLoading = false; 

}
