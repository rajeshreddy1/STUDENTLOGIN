import { Component, OnInit } from '@angular/core';
import { CourseService } from '../service/data/course.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;
  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('authenticatedUser');
  }

}
