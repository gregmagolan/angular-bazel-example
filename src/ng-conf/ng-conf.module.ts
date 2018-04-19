import {NgModule} from '@angular/core';

import {NgConfPipe} from './ng-conf.pipe';

@NgModule({
  declarations: [NgConfPipe],
  exports: [NgConfPipe],
})
export class NgConfModule {
}