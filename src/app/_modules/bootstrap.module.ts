import { NgModule } from '@angular/core';
import {
  ModalModule,
  AlertModule
} from 'ngx-bootstrap';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  exports: [
    ModalModule,
    AlertModule
  ]
})

export class BootstrapModule {}
