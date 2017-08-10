import { Injectable } from '@angular/core';

import { Folder } from '../data-structure/folder';
import { Course } from '../data-structure/course';
import { Question } from '../data-structure/question';

import { FOLDERS } from '../mock-data/folderList';
import { COURSES } from '../mock-data/courseList';
import { QUESTIONS } from '../mock-data/questionList';

@Injectable()
export class DataService {
  folders: Folder[] = FOLDERS;
  courses: Course[] = COURSES;
  questions: Question[] = QUESTIONS;

  constructor() { }

  getFolders(): Folder[] {
    return this.folders;
  }

  getCourses(): Course[] {
    return this.courses;
  }

  getQuestions(): Question[] {
    return this.questions;
  }
}
