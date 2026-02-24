import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit {

  @Input() defaultbackground:any;
  @HostBinding('style.background') background:any;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    this.background = this.defaultbackground
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red')
  }

  @HostListener('click') onClick(event:any){
    console.log('clicked')
    this.background='green'
  }
  
}
