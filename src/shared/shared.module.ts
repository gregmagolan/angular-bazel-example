import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MyFooterModule} from './my-footer/my-footer.module';

@NgModule({
  imports: [
    CommonModule,
    MyFooterModule,
  ],
  exports: [
    CommonModule,
    MyFooterModule,
  ]
})
export class SharedModule {}
