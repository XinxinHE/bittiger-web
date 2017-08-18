import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Question } from '../../data-structure/question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  question: Question;
  questionId: number;
  constructor(@Inject('data') private dataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.questionId = +params['id'];
      this.dataService.getQuestion(+params['id'])
        .then(question => this.question = question)
    });
  }

}
