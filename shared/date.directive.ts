import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {
// tworzymy pole, ktore bedzie przetrzymywac date, za pomoca @Inputa
  @Input()
  private date: string;
  // tworzenie elementu/paragraphu w ktorym bedzie wstrzykiwana data elmentem li
  private paragraph;
  // tutaj tworzymy <p> w html

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph= this.renderer.createElement('p');
  }
  // musimy zaimplementowac lisenery, które beda regowac na myszke i na date wykonania zadania, @HostListener inicjalizuje metode mouseenter, który przyjmuje event


  @HostListener('mouseenter')
  mouseenter(eventDate: Event){
  this.paragraph.innerHTML = this.date;
  this.renderer.appendChild(this.el.nativeElement, this.paragraph);
    // tutaj data ma sie pokazac jak najedziemy myszką

  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event){
    // this.paragraph.innerHTML = '';
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);


    // tutaj data ma zniknąc jak najedziemy myszką

  }
}
