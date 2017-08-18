import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { Folder } from '../../data-structure/folder';
import { Question } from '../../data-structure/question';

const DEFAULT_QUESTION: Question = Object.freeze({
  qid: 0,
  subject: '',
  body: ``,
  folder: 1
});

@Component({
  selector: 'app-question-post',
  templateUrl: './question-post.component.html',
  styleUrls: ['./question-post.component.css']
})
export class QuestionPostComponent implements OnInit {
  public editor;
  public editorOptions = {
    placeholder: 'insert content...',
    modules: {
      toolbar: '#toolbar'
    }
  };

  newQuestion: Question = Object.assign({}, DEFAULT_QUESTION);
  folders: Folder[];
  postedQuestion: Question;

  constructor(@Inject('data') private dataService,
              private router: Router) { }

  ngOnInit() {

    this.getFolders();

  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  onSelectionChange(folder) {
    this.newQuestion.folder = folder.fid;
  }

  getFolders(): void {
    this.dataService.getFolders()
      .subscribe(folders => this.folders = folders);
  }

  addQuestion() {
    this.dataService.addQuestion(this.newQuestion)
      .then(question => {
          this.postedQuestion = question;
          console.log(this.postedQuestion);
          this.router.navigateByUrl(`/home/(questionBoard:questions/${this.postedQuestion.qid}//courseBoard:courses/2)`);
        })
      .catch(err => console.log(err.body));
    
    this.newQuestion = Object.assign({}, DEFAULT_QUESTION);
  }

}
