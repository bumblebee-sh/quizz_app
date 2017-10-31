import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertMessage {
  private subject = new Subject<any>();
  private timer;

  succes(message: string) {
    this.subject.next({type: 'success', text: message});
    this.clearMessage();
  }

  error(message: string) {
    this.subject.next({type: 'danger', text: message});
    this.clearMessage();
  }

  clearMessage() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.subject.next();
    }, 3000);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
