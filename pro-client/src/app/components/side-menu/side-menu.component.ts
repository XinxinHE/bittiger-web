import { Component, OnInit, Inject, Pipe, PipeTransform } from '@angular/core';
import { Folder } from 'app/data-structure/folder';
import { Course } from 'app/data-structure/course';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent implements OnInit {
  folders: Folder[];
  courses: Course[];
  course: Course;

  _opened: boolean = true;
  _mode: string = 'push';
  _position: string = 'right';
  
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getCourses();
    this.getFolders();
  }

  getFolders(): void {
    this.dataService.getFolders()
      .subscribe(folders => this.folders = folders); 
  }

  getCourses(): void {
    this.dataService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  getCourse(id: number): Course {
    return this.course = this.dataService.getCourse(id);
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
