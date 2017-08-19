import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Folder } from '../../data-structure/folder';
import { Question } from '../../data-structure/question';

const DEFAULT_QUESTION: Question = Object.freeze({
  qid: 0,
  subject: '',
  body: ``,
  folder: 1,
  date: new Date(),
  comments: []
});

@Component({
  selector: 'app-question-new',
  templateUrl: './question-new.component.html',
  styleUrls: ['./question-new.component.css']
})
export class QuestionNewComponent implements OnInit {
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
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getFolders();
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.dataService.getQuestion(+params['id'])
          .then(question => {
            delete question._id;  // TODO: why $oid cannot be updated
            this.newQuestion = Object.assign({}, question);
            // console.dir(this.newQuestion);
          });
      }
    });
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

  postQuestion() {
    if (this.newQuestion.qid === 0) {
      this.addQuestion();
    } else {
      this.updateQuestion(this.newQuestion.qid);
    }
  }

  addQuestion() {
    this.newQuestion.date = new Date();
    this.dataService.addQuestion(this.newQuestion)
      .then(question => {
          this.postedQuestion = question;
          this.router.navigateByUrl(`/home/(questionBoard:questions/${this.postedQuestion.qid}//courseBoard:courses/2)`);
        })
      .catch(err => console.log(err.body));
    
    this.newQuestion = Object.assign({}, DEFAULT_QUESTION);
  }

  updateQuestion(id: number) {
    this.newQuestion.date = new Date();
    this.dataService.updateQuestion(this.newQuestion, id)
      .then(question => {
        this.postedQuestion = question;
        //console.log(question);
        this.router.navigateByUrl(`/home/(questionBoard:questions/${this.postedQuestion.qid}//courseBoard:courses/2)`);
      })
      .catch(err => console.log(err.body));
  }
}