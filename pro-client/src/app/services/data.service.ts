import { Injectable } from '@angular/core';
import { Folder } from '../data-structure/folder';
import { Course } from '../data-structure/course';

import { FOLDERS } from '../mock-data/folderList';
import { COURSES } from '../mock-data/courseList';

@Injectable()
export class DataService {
  folders: Folder[] = FOLDERS;
  courses: Course[] = COURSES;

  constructor() { }

  getFolders(): Folder[] {
    return this.folders;
  }

  getCourses(): Course[] {
    return this.courses;
  }
}
