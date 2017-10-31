import { Component } from '@angular/core';
import { AlertMessage } from '../_services/alert.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

import { QuizService, LogService } from '../_services/index.services';

import { QuizResultComponent } from '../quiz-result/quiz-result.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  step = 0;
  err = false;
  last_step = false;
  show_last_modal = false;
  public questions: any[] = [];
  public model: any = {} ;

  constructor(
    public modalRef: BsModalRef,
    public modalService: BsModalService,
    public quizService: QuizService,
    public logService: LogService,
  ) {}

  pick_it(item) {
    this.err = false;
    item.status = !item.status;
  }

  go_step(way) {
    if (!this.check_answer() && way) {
      return false;
    }
    this.err = false;
    if (way) {
      if (this.step === this.questions.length - 2 && way) {
        this.last_step = true;
      }
      this.step++;
    } else {
      this.last_step = false;
      this.step--;
    }
  }

  check_answer() {
    let flag = false;
    this.questions[this.step].answers.forEach(function(el, i) {
      if (el.status) {
        flag = true;
      }
    });
    if (!flag) {
      this.err = true;
    }
    return flag;
  }

  save_quiz() {
    if (!this.check_answer()) {
      return false;
    }
    this.show_last_modal = true;
    const data = {
      all_answers: this.questions,
      time: new Date(),
      _id: this.model._id
    };
    this.quizService.saveResult(data).subscribe(
      res => this.logService.pass(this.model),
      err => console.log(err)
    );
  }

  show_result() {
    const result_modal = this.modalService.show(QuizResultComponent);
    result_modal.content.results = this.questions;
    this.modalRef.hide();
  }
  close_pop() {
    this.modalRef.hide();
    this.questions.forEach( elem => {
      elem.answers.forEach(item => item.status = false );
    });
  }
}
