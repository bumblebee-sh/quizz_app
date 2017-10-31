import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BootstrapModule, AppRoutingModule } from './_modules/index';

import { QuizService, AlertMessage, LogService} from './_services/index.services';

// mock backend
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { fakeBackendProvider } from './_mock/mock_backend.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { CardComponent, DeleteModelComponent } from './_directives/card/card.component';
import { QuestionComponent } from './_directives/question/question.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { QuizComponent } from './quiz/quiz.component';
import { AlertComponent } from './_directives/alert/alert.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { LogsComponent } from './logs/logs.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddQuizComponent,
    CardComponent,
    DeleteModelComponent,
    QuestionComponent,
    AddQuestionsComponent,
    QuizComponent,
    AlertComponent,
    QuizResultComponent,
    ResultsTableComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BootstrapModule,

  ],
  providers: [
    QuizService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AlertMessage,
    LogService
  ],
  entryComponents: [
    DeleteModelComponent,
    QuizComponent,
    QuizResultComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
