import { Directive, Input, ElementRef, HostListener  } from '@angular/core';
// elementRed -> referencia, HostListener -> escucha los cambios
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input("appResaltado") nuevoColor: string | undefined;

  constructor(private el: ElementRef) {
    console.log('desde la directiva')
  }
  @HostListener('mouseenter') mouseEntro() {
    this.resaltar(this.nuevoColor || 'yellow')
  }

  @HostListener('mouseleave') mouseSalio() {
    this.resaltar( '' )
  }

  private resaltar(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  

}
