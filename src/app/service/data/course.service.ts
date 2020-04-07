import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from 'src/app/welcome/welcome.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }

  retrieveAllCourses(username) {
    return this.http.get<Courses>(`http://localhost:8080/users/${username}/courses`)
  }
}
