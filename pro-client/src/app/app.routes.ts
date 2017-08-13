import { Routes, RouterModule } from "@angular/router";
import { BoardComponent } from './components/board/board.component';
import { MiddleBoardComponent } from './components/middle-board/middle-board.component';

const routes: Routes = [
 {
     path: '',
     redirectTo: 'courses',
     pathMatch: 'full'
 },
 {
     path: 'courses',
     component: BoardComponent,
 },
 {
     path: 'courses/:id',
     component: BoardComponent,
 },
 { 
     path: 'questions',
     component: BoardComponent
 },
 {
     path: 'questions/:id',
     component: BoardComponent
 },
 {
     path: '**',
     redirectTo: 'courses'
 }
];

export const routing = RouterModule.forRoot(routes);