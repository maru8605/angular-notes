import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked ,AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-styles></app-ng-styles>

    <br />

    <app-css></app-css>

    <br />

    <h2 [appResaltado]="'violet'">Hola mundo</h2>

    <br />
    <app-ng-switch></app-ng-switch>
  `,
  styles: [],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log("OnInit")
  }

  ngOnChanges(): void {
    console.log("OnChanges")
  }

  ngDoCheck(): void {
    console.log("DoCheck")
  }

  ngAfterContentInit(): void {
    console.log("AfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("AfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy")
  }

}
