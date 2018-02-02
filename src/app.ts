
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {HelloWorldComponent} from './hello-world/hello-world.component';
import {HelloWorldModule} from './hello-world/hello-world.module';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', component: HelloWorldComponent},
      {path: 'foo', pathMatch: 'full', loadChildren: './foo/foo.module#FooModule'},
    ]
  },
];

@Component({selector: 'app-component', template: '<router-outlet></router-outlet>'})
export class BootstrapComponent {}

@NgModule({
  imports: [BrowserModule, HelloWorldModule, RouterModule.forRoot(appRoutes)],
  declarations: [BootstrapComponent],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
