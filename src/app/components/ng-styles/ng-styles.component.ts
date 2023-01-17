import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-styles',
  template: `
    <p [style.font-size.px]="sizes">Hola mundo</p>

    <button class="btn btn-primary" (click)="(sizes = sizes + 5)">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary ms-2" (click)="restar()">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: [],
})
export class NgStylesComponent implements OnInit {
  sizes: number = 20;
  constructor() {}

  ngOnInit(): void {}

  restar() {
    if (this.sizes > 5) {
      this.sizes = this.sizes - 5;
    } else {
      console.log('no se puede restar mas ');
      this.sizes = 4;
    }
  }
}

