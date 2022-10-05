import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>

  <div class="clear" id="sliderSection"></div>
  <app-slider></app-slider>

  <div class="clear" id="productsSection"></div>
  <app-products></app-products>

  <div class="clear" id="homeSection"></div>
  <app-about></app-about>

  <div class="clear" id="contactSection"></div>
  <app-contact></app-contact>

  
  <div class="clear" id="footerSection"></div> 
  <app-footer></app-footer>

  `,
  styles: [`
  .clear { clear: both; height: 60px; }
`]
})
export class AppComponent {
  title = 'crownwoods';
}
