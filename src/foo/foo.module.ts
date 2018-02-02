import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FooComponent} from './foo.component';

@NgModule({
  declarations: [FooComponent],
  imports: [RouterModule, RouterModule.forChild([{path: '', component: FooComponent}])],
})
export class FooModule {}