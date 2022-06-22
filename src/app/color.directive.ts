import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  colors = ['red', 'blue', 'green', 'yellow'];
  constructor(private eRef: ElementRef) {
    // this.changeColor(eRef);

    // this.eRef.nativeElement.style.color="green"
    this.eRef.nativeElement.style.textDecoration = 'underline';
   }

  //  changeColor(eRef: ElementRef) {
  //   setInterval(() => {
  //     eRef.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  //   });
  //   }

}
