import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBoardComponent } from './middle-board.component';

describe('MiddleBoardComponent', () => {
  let component: MiddleBoardComponent;
  let fixture: ComponentFixture<MiddleBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
