import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

/*
Esta directiva, pasa por parámetro la variable color (esta cambia desde los radio buttons)
desde el compomente se tomo el input (valor de color que varía desde el template)
los eventos listener (mouseenter/mouseleave) para aplicar el color al hacer hover
y Render que se utiliza para hacer 'setElementStyle' y cambiar el bgc inline.
*/
export class HighlightDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {}

    @Input('appHighlight') highlightColor: string;

    // To do this, you can apply the @HostListener decorator to methods which are called when an event is raised.
    // pasa el color 'yellow' al highlight
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'yellow');
    }

    // pasa null al color del highlight
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        // aplica el style al elemento seleccionado
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }



}
