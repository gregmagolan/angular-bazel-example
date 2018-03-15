import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {HelloWorldComponent} from './hello-world.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HelloWorldComponent],
  exports: [HelloWorldComponent],
})
export class HelloWorldModule {}