import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { SidebarModule } from 'ng-sidebar';
import { QuillEditorModule } from 'ngx-quill-editor';

import { DataService } from './services/data.service'
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';

import { SelectedCoursePipe } from './components/side-menu/side-menu.pipe';
import { SelectedQuestionPipe } from './components/question-list/question-list.pipe';

import { QuestionNewComponent } from './components/question-new/question-new.component';
import { QuestionListComponent } from './components/question-list/question-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    BoardComponent,
    MiddleBoardComponent,
    SelectedCoursePipe,
    SelectedQuestionPipe,
    QuestionNewComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    SidebarModule.forRoot(),
    routing,
    HttpModule,
    FormsModule,
    QuillEditorModule
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
