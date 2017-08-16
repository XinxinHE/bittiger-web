import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";

// BehaviourSubject: represents a value that changes over time

import { Folder } from '../data-structure/folder';
import { Course } from '../data-structure/course';
import { Question } from '../data-structure/question';

@Injectable()
export class DataService {
  private _folderSource = new BehaviorSubject<Folder[]>([]);
  private _courseSource = new BehaviorSubject<Course[]>([]);
  private _questionSource = new BehaviorSubject<Question[]>([]);

  // folders: Folder[] = FOLDERS;
  // courses: Course[] = COURSES;
  // questions: Question[] = QUESTIONS;

  constructor(private http: Http) { }

  getFolders(): Observable<Folder[]> {
    // return this.folders;
    this.http.get('api/v1/folders')
    .toPromise()
    .then((res: Response) => {
      this._folderSource.next(res.json());
    })
    .catch(this.handleError);

    return this._folderSource.asObservable();
  }

  getCourses(): Observable<Course[]> {
    this.http.get('api/v1/courses')
    .toPromise()
    .then((res: Response) => {
      this._courseSource.next(res.json());
    })
    .catch(this.handleError);

    return this._courseSource.asObservable();
  }

  getQuestions(): Observable<Question[]> {
    this.http.get('api/v1/questions')
    .toPromise()
    .then((res: Response) => {
      this._questionSource.next(res.json());
    })
    .catch(this.handleError);

    return this._questionSource.asObservable();
  }

  getCourse(id: number) {
    return this.http.get(`api/v1/courses/${id}`)
    .toPromise()
    .then((res: Response) => {
      return res.json();
    })
    .catch(this.handleError);
    //return this.courses.filter(course => course.cid === id)[0];
  }


  getQuestion(id: number) {
    return this.http.get(`api/v1/questions/${id}`)
    .toPromise()
    .then((res: Response) => {
      return res.json();
    })
    .catch(this.handleError);
    //return this.courses.filter(course => course.cid === id)[0];
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error);
  }
}
