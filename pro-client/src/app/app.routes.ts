import { Routes, RouterModule } from "@angular/router";
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionNewComponent } from './components/question-new/question-new.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

const routes: Routes = [
 {
     path: '',
     redirectTo: 'home',
     pathMatch: 'full'
 },
 {
     path: 'home',
     component: BoardComponent,
     children: [
         { path: 'courses/:id', component: MiddleBoardComponent, outlet: 'courseBoard' },
         { path: 'questions', component: QuestionListComponent, outlet: 'questionBoard'},
         { path: 'new-question', component: QuestionNewComponent, outlet: 'questionBoard'},
         { path: 'new-question/:id', component: QuestionNewComponent, outlet: 'questionBoard'},
         { path: 'questions/:id', component: QuestionDetailComponent, outlet: 'questionBoard'}
     ]
 },
 {
     path: '**',
     redirectTo: 'home'
 }
];

export const routing = RouterModule.forRoot(routes);