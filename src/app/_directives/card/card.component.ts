import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { QuizService, LogService } from '../../_services/index.services';
import { QuizComponent } from '../../quiz/quiz.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() model: any;
  @Input() preview: boolean;
  @Input() models: any;
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private logService: LogService
  ) { }

  ngOnInit() {

  }

  delete_card(item) {
    this.logService.delete_item(this.model);
    this.bsModalRef = this.modalService.show(DeleteModelComponent);
    this.bsModalRef.content.quiz = item;
    this.bsModalRef.content.model = this.models;
  }

  show_quiz(items) {
    items.forEach( elem => {
      elem.answers.forEach(item => item.status = false );
    });
    this.bsModalRef = this.modalService.show(QuizComponent);
    this.bsModalRef.content.questions = items;
    this.bsModalRef.content.model = this.model;
  }
}


@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">Delete {{quiz.name}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center font-weight-bold">
      Are You sure?
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="delete_quiz(quiz._id)">Yes</button>
      <button type="button" class="btn btn-success" (click)="bsModalRef.hide()">No</button>
    </div>
  `
})
export class DeleteModelComponent {
  public quiz: any = {};
  public model: any = {};
  constructor(
    public bsModalRef: BsModalRef,
    private quizService: QuizService
  ) {}

  delete_quiz(id) {
    this.quizService.deleteQuize(id).subscribe(
      res => {
        let index = 0;
        this.model.forEach((item, i) =>  {
          if (item._id === id) {
            index = i;
            return false;
          }
        });
        this.model.splice(index, 1);
        this.bsModalRef.hide();
      },
      err => console.log(err)
    );
  }
}
