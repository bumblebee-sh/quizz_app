import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertMessage } from '../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnDestroy{
  data: any;
  subscription: Subscription;

  constructor(
    private alertMessage: AlertMessage
  ) {
    this.subscription = this.alertMessage.getMessage().subscribe(res => { this.data = res; });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
