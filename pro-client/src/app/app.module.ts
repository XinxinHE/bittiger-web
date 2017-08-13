import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SidebarModule } from 'ng-sidebar';

import { DataService } from './services/data.service'
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { QuestionBoardComponent } from './components/question-board/question-board.component';
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';

import { SelectedCoursePipe } from './components/side-menu/side-menu.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    QuestionBoardComponent,
    BoardComponent,
    MiddleBoardComponent,
    SelectedCoursePipe
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    routing,
    HttpModule
  ],
  providers: [
    {  
      provide: 'data',
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
