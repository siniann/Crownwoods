import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider',
  template:
    `
  <c-carousel class="sliderScreenHeight" transition="crossfade"[dark]="true" [wrap]="false" [interval]="2000">
  <c-carousel-indicators class="d-none"></c-carousel-indicators>
  <c-carousel-inner>
    <c-carousel-item *ngFor="let slide of slides; index as i;">
      <img
        [src]="slide.src"
        alt="{{slide.title}}"
        class="d-block w-100 setHeight"
        loading="lazy"
      />
      <c-carousel-caption class="d-md-block backgroundText">
        <h3><span>{{slide.title}}</span></h3>
        <p><span>{{slide.subtitle}}</span></p>
      </c-carousel-caption>
    </c-carousel-item>
  </c-carousel-inner>
  <c-carousel-control  [routerLink] caption="Previous" direction="prev"></c-carousel-control>
  <c-carousel-control [routerLink] caption="Next" direction="next"></c-carousel-control>
</c-carousel>
`
  ,
  styles: [
    `
    .setHeight{
        height: 80vh;
       }

    `
  ]
})

export class SliderComponent implements OnInit {

  slides: any[] = new Array(6).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './assets/images/common.png',
      title: '100% Ecofriendly',
      subtitle: 'No trees are cut for WPC products.'
    };
    this.slides[1] = {
      id: 1,
      src: './assets/images/lightspace.png',
      title: 'Durable and high Density',
      subtitle: 'Long lasting, waterproof, termite proof .'
    }
    this.slides[2] = {
      id: 2,
      src: './assets/images/space.png',
      title: 'Ready to install',
      subtitle: 'Saves time and effort.'
    }
    this.slides[3] = {
      id: 3,
      src: './assets/images/doors.png',
      title: 'No compromise on the quality of product',
      subtitle: 'Professionally designed and excellent quality door frames'
    }
    this.slides[4] = {
      id: 4,
      src: './assets/images/room.png',
      title: 'WPC is UV resistant',
      subtitle: 'Perfect for indoor and outdoor needs.'
    }
    this.slides[5] = {
      id: 5,
      src: './assets/images/cupboard.png',
      title: 'WPC door frames are fire retardant ',
      subtitle: 'They never catch or spread fire.'
    }
  }
}
