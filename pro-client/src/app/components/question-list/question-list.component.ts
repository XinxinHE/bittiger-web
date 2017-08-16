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
    this.dataService.getQuestions()
      .subscribe(questions => this.questions = questions);
  }

  getFolders(): void {
    this.dataService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
}
