import { Component, OnInit } from '@angular/core';
import { QuizService } from '../_services/quiz.service';
import { Quiz } from '../_models/quiz.model';
import { ActivatedRoute, ParamMap} from '@angular/router';

import { QuizResultComponent } from '../quiz-result/quiz-result.component';

import { BsModalService } from 'ngx-bootstrap/modal';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.scss']
})
export class ResultsTableComponent implements OnInit {
  quiz: Quiz;
  constructor(
    private quizService: QuizService,
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.switchMap((params: ParamMap) => this.quizService.getQuiz(+params.get('id'))).subscribe(
      res => {
        this.quiz = res[0];
      }
    );
  }

  show_more(item) {
    const modal = this.modalService.show(QuizResultComponent);
    modal.content.results = item.all_answers;
  }
}
