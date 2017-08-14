import { Component, OnInit , Inject, Pipe, PipeTransform} from '@angular/core';
import { Folder } from 'app/data-structure/folder';
import { Question } from 'app/data-structure/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  _opened: boolean = true;
  _mode: string = 'push';
  _position: string = 'right';

  questions: Question[];
  folders: Folder[];
  
  constructor(@Inject('data') private dataService) { }

  ngOnInit() {
    this.getQuestions();
    this.getFolders();
  }
  
  getQuestions(): void {
    this.questions = this.dataService.getQuestions();
  }

  getFolders(): void {
    this.folders = this.dataService.getFolders();
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
