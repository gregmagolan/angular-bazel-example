import {Component, NgModule} from '@angular/core';
import {msg} from '../lib/file';

@Component({
  selector: 'foo',
  template: `
    <div>Foo {{ name }}</div>
    <input type="text" [value]="name" (input)="name = $event.target.value"/>
    <div><a routerLink="/">Home</a></div>
  `,
  styleUrls: ['./foo-styles.css']
})
export class FooComponent { name: string = msg; }
