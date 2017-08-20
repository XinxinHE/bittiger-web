import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../../data-structure/question';
import { Comment } from '../../data-structure/comment';

const DEFAULT_COMMENT: Comment = {
  commid: 0,
  desc: '',
  question: 0,
  profile: '../../assets/profile.png',
  name: 'Iris Li',
  date: new Date()
}

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question;
  postedQuestion: Question;
  comment: Comment = Object.assign({}, DEFAULT_COMMENT);

  constructor(@Inject('data') private dataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion() {
    this.route.params.subscribe((params: Params) => {
      this.dataService.getQuestion(+params['id'])
        .then((question) => {
          delete question._id; 
          this.question = question;
          this.initComment();
        });
    });
  }

  initComment() {
    this.comment.commid = this.question.comments.length + 1;
    this.comment.question = this.question.qid;
  }

  addComment() {
    this.comment.date = new Date();
    this.question.comments.push(this.comment);

    this.updateQuestion(this.question.qid);
    this.getQuestion();

    this.comment = Object.assign({}, DEFAULT_COMMENT)
  }

  updateQuestion(id: number) {
    this.dataService.updateQuestion(this.question, id)
      .then(question => {
        this.postedQuestion = question;
      })
      .catch(err => console.log(err.body));
  }
}
