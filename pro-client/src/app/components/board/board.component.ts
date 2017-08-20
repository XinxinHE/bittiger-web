import { Component, OnInit, Inject } from '@angular/core';
import { Folder } from 'app/data-structure/folder';
import { Course } from 'app/data-structure/course';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  folders: Folder[];
  courses: Course[];

  _leftopened: boolean = true;
  _rightopened: boolean = false;

  _mode: string = 'push';
  _position: string = 'right';
  
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getCourses();
    this.getFolders();
  }

  getFolders(): void {
    this.folders = this.dataService.getFolders(); 
    console.log(this.folders);
  }

  getCourses(): void {
    this.courses = this.dataService.getCourses();
  }

  _toggleLeftSidebar() {
    this._leftopened = !this._leftopened;
    if (this._leftopened) {
      this._rightopened = false;
    }
  }
  
  _toggleRightSidebar() {
    this._rightopened = !this._rightopened;
    if (this._rightopened) {
      this._leftopened = false;
    }
  }
}
