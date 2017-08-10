import { Component, OnInit, Inject } from '@angular/core';
import { Folder } from 'app/data-structure/folder';
import { Course } from 'app/data-structure/course'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  folders: Folder[];
  courses: Course[];

  _opened: boolean = true;
  _mode: string = 'push';
  _position: string = 'right';
  
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getCourses();
    this.getFolders();
  }

  getFolders(): void {
    this.folders = this.dataService.getFolders(); 
  }

  getCourses(): void {
    this.courses = this.dataService.getCourses();
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }

}
