import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit, OnInit{

  constructor(private eRef: ElementRef) {
  
   }
  ngOnInit(): void {
    
  }

   ngAfterViewInit(): void {
    const element = this.eRef.nativeElement
      if(element.innerText.length > 4)
        {
          element.style.textDecoration = "underline";
        }
  }


}
