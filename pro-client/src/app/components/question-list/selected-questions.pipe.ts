import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../../data-structure/question';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'selectedQuestion'})
export class SelectedQuestionPipe implements PipeTransform {
  transform(allQuestions: Question[], fid: number) {
      let selectedQuestions: Question[] = [];

      for (let question of allQuestions) {
        if (question.folder === fid) {
          selectedQuestions.push(question);
        }
      }
      return selectedQuestions;
  }
}
