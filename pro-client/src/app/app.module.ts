import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';

import { DataService } from './services/data.service'

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { QuestionBoardComponent } from './components/question-board/question-board.component';
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    QuestionBoardComponent,
    BoardComponent,
    MiddleBoardComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot()
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
