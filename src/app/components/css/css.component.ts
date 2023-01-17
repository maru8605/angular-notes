import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
})
export class CssComponent implements OnInit {
  alerta: string = 'alert-primary';

  propiedades: any = {
    danger: true,
  }

  guardado: boolean = false;
  constructor() {}

  ngOnInit(): void {
    console.log(this.propiedades)
  }

  guardar() {
    this.guardado = true;

    setTimeout(() => {
      this.guardado = false
    }, 3000);

  }
}
