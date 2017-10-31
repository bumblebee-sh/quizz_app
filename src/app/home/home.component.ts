import { Component, OnInit } from '@angular/core';
import { QuizService } from '../_services/quiz.service';

import { Quiz } from '../_models/quiz.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quizzes: Quiz[];
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    this.quizService.getQuizzes().subscribe(
      res => this.quizzes = res,
      err => console.log(err)
    );
  }

}
