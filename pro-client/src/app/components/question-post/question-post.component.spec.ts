import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPostComponent } from './question-post.component';

describe('QuestionPostComponent', () => {
  let component: QuestionPostComponent;
  let fixture: ComponentFixture<QuestionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
