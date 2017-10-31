import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../_models/question.model';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  @Input() questions: Question[];
  current_question: Question;
  constructor() { }

  ngOnInit() {
    if (!this.questions.length) {
      this.questions.push(new Question());
    }

    this.current_question = this.questions[0];
  }

  add_question() {
    const index = this.questions.length - 1;
    if (!this.questions[index].answers.length) {
      return false;
    }
    this.questions.push(new Question());
    this.pick_question(this.questions[index + 1]);
  }

  pick_question(item) {
    this.current_question = item;
  }

  OnDelete(data) {
    let index = 0;
    this.questions.forEach((elem, i ) => {
      if(elem == data) {
        index = i;
      }
    })
    if (this.questions.length > 1) {
      this.questions.splice(index, 1);
      this.pick_question(this.questions[index - 1]);
    }
  }
}
