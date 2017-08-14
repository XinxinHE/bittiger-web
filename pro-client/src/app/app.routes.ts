import { Routes, RouterModule } from "@angular/router";
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionNewComponent } from './components/question-new/question-new.component';

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
         { path: 'new-question', component: QuestionNewComponent, outlet: 'questionBoard'}
     ]
 },
 {
     path: '**',
     redirectTo: 'courses'
 }
];

export const routing = RouterModule.forRoot(routes);