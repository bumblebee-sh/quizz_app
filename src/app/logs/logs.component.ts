import { Component, OnInit } from '@angular/core';
import { LogService } from '../_services/log.service';
import { Log } from '../_models/log.model';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {
  log_list: Log[] ;
  constructor(
    private logService: LogService
  ) { }

  ngOnInit() {
    this.logService.getLogs().subscribe(
      res => this.log_list = res,
      err => console.log(err)
    );
  }

}
