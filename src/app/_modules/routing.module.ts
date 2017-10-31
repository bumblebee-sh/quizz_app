import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { ResultsTableComponent } from '../results-table/results-table.component';
import { LogsComponent } from '../logs/logs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add_quiz', component: AddQuizComponent },
  { path: 'results/:id', component: ResultsTableComponent },
  { path: 'edit/:id', component: AddQuizComponent },
  { path: 'logs', component: LogsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
