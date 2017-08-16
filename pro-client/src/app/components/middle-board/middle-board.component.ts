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
    @Inject('data') private dataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // get course id from the activated router params
      this.dataService.getCourse(+params['id'])
        .then(course => this.course = course);
    });
  }
}
