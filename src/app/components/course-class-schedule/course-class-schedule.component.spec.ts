import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClassScheduleComponent } from './course-class-schedule.component';

describe('CourseClassScheduleComponent', () => {
  let component: CourseClassScheduleComponent;
  let fixture: ComponentFixture<CourseClassScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClassScheduleComponent]
    });
    fixture = TestBed.createComponent(CourseClassScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
