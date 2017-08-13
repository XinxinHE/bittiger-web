import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Course } from 'app/data-structure/course';

@Component({
  selector: 'app-middle-board',
  templateUrl: './middle-board.component.html',
  styleUrls: ['./middle-board.component.css']
})

export class MiddleBoardComponent implements OnInit {

  course: Course;

  constructor(
    private route: ActivatedRoute,
    @Inject('data') private data
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // get course id from the activated router params
      this.course = this.data.getCourse(+params['id']);
    });
  }

}
