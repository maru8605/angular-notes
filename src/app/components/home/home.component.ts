import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
     <app-ng-styles></app-ng-styles>
     <app-css></app-css>

     <h2 [appResaltado]="'violet'">Hola mundo</h2>

    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
