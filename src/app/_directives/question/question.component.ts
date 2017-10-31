import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() model: any;
  @Output() delete = new EventEmitter();
  constructor() { }

  add_answer(answer) {
    if (answer.value) {
      this.model.answers.push({status: false, text: answer.value});
      answer.value = '';
      answer.classList.remove('is-invalid');
    } else {
      answer.classList.add('is-invalid');
    }
  }

  remove_answer = answer => this.model.answers.splice(this.model.answers.indexOf(answer), 1);

  save_answer(f: HTMLFormElement) {
    f.reset();
  }

  onDelete(data) {
    this.delete.emit(data);
  }
}
