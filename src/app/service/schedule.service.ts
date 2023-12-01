import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient : HttpClient) { }

  private readonly LOCAL_API = "http://localhost:8080";
  private readonly DEPLOY_API =  environment.apiUrl;

  public getScheduleByInstructorNameAndCourse(instructorName : string, course : string){
    return this.httpClient.get(`${this.LOCAL_API}/api/v1/schedules?instructorName=${instructorName}&course=${course}`)
  }

}
