import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/map';

@Injectable()
export class LogService {

  constructor(
    private http: Http
  ) { }

  add(data) {
    return this.http.post(environment.host + environment.log, this.log_data(data, 'add')).map(res => res.json());
  }

  delete_item(data) {
    return this.http.post(environment.host + environment.log, this.log_data(data, 'delete')).map(res => res.json());
  }

  edit(data) {
    return this.http.post(environment.host + environment.log, this.log_data(data, 'edit')).map(res => res.json());
  }

  pass(data) {
    return this.http.post(environment.host + environment.log, this.log_data(data, 'pass')).map(res => res.json());
  }

  getLogs() {
    return this.http.get(environment.host + environment.log).map(res => res.json());
  }

  private log_data(data, action) {
    const log = {
      _id : data._id,
      name : data.name,
      time : new Date(),
      action : action
    };
    return log;
  }
}
