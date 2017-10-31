import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import { QuizService, LogService} from '../_services/index.services';

import { Quiz } from '../_models/quiz.model';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
  model: Quiz;
  preview = true;
  show_questions = false;
  load_btn_text = 'No file chosen';
  edit_mode = false;
  error_img = false;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private logService: LogService
  ) { }

  ngOnInit() {
    this.edit_mode = this.location.path().indexOf('edit') > 0;
    if (this.edit_mode) {
      this.route.paramMap.switchMap((params: ParamMap) => this.quizService.getQuiz(+params.get('id'))).subscribe(
        res => this.model = res[0],
        err => console.log(err)
      );
    } else {
      this.model = new Quiz();
    }
  }

  toggle_preview = () => this.preview = !this.preview;

  toogle_questions = () => this.show_questions = !this.show_questions;

  add_image(event) {
    const file = event.target.files[0];
    if (file.size >= 2e+6 ) {
      this.error_img = true;
      return false;
    } else {
      this.error_img = false;
    }
    const reader = new FileReader();
    this.load_btn_text = file.name;
    reader.onload = e => {
      this.model.image = e.target['result'];
    };
    reader.readAsDataURL(file);
  }

  save_quiz() {
    if (!this.edit_mode) {
      this.model._id = Date.now();
    }
    if (this.edit_mode) {
      this.quizService.editQuiz(this.model).subscribe(
        res => {
          this.router.navigate(['/login']);
          this.logService.edit(this.model);
        },
        err => console.log(err)
      );
    } else {
      this.quizService.addQuiz(this.model).subscribe(
        res => {
          this.logService.add(this.model);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );
    }

  }
}
