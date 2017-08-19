import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../data-structure/course';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'selectedCourse'})
export class SelectedCoursePipe implements PipeTransform {
  transform(allCourses: Course[], fid: number) {
      let selectedCourses: Course[] = [];
      
      for (let course of allCourses) {
        if (course.folder == fid) {
            selectedCourses.push(course);
        }
      }
      return selectedCourses;
  }
}