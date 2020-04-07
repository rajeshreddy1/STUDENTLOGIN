import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../service/data/course.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  courses: Courses;
  username: string;
  constructor(private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];

    this.courseService.retrieveAllCourses(this.username).subscribe(
      response => this.courses = response 
    )
  }

}

export class Courses {
  constructor(
    public id: number,
    public courseCode: string,
    public courseDescription: string,
    public professor: string,
    public enrolledDate: Date
  ) {

  }
}
