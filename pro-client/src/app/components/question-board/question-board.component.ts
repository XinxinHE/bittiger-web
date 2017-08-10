import { Component, OnInit , Inject} from '@angular/core';
import { Folder } from 'app/data-structure/folder';
import { Question } from 'app/data-structure/question';

@Component({
  selector: 'app-question-board',
  templateUrl: './question-board.component.html',
  styleUrls: ['./question-board.component.css']
})
export class QuestionBoardComponent implements OnInit {

  _opened: boolean = true;
  _mode: string = 'push';
  _position: string = 'right';

  questions: Question[];
  
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getQuestions();
  }
  
  getQuestions(): void {
    this.questions = this.dataService.getQuestions();
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
