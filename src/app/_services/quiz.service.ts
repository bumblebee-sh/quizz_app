import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()

export class QuizService {

  constructor(
    private http: Http
  ) { }

  addQuiz(quiz) {
    return this.http.post(environment.host + environment.quiz, quiz).map(res => res.json());
  }

  getQuizzes() {
    return this.http.get(environment.host + environment.quiz).map(res => res.json());
  }

  deleteQuize(id) {
    return this.http.post(environment.host + environment.delete_quiz, id).map(res => res.json());
  }

  getQuiz(id) {
    return this.http.post(environment.host + environment.get_quiz, id).map(res => res.json());
  }

  editQuiz(quiz) {
    return this.http.put(environment.host + environment.quiz, quiz).map(res => res.json());
  }

  saveResult(result) {
    return this.http.post(environment.host + environment.save_result_quiz, result).map(res => res.json());
  }
}
