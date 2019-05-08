import { Component, NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  {
  @Input() slides: [{src: string, alt: string, header: string, text: string}];
  myInterval = 1000;
  activeSlideIndex = 0;
}
