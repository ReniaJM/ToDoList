import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit{
// potrezbujemy dwie pomocnicze classy ktore wstrzykujemy do contruktora
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // modyfkujemy elemnty html w naszym ngoninit, mozemy operować soebie na elemencie listy, który zostanie dostarczony czy el z listy html <li  appChecked *ngFor="let task of taskDone">

  ngOnInit():void {
    let li= this.el.nativeElement;
    this.renderer.setStyle(li,'list-style-image', 'url(/assets/checked.png)');
    this.renderer.setStyle(li, 'background', '#b49eab');
  }


}
