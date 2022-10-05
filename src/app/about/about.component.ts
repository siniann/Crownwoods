import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-centered-text">
          <h3 class="textColor">We provide high quality products at best price</h3>
          <h3> Comprehensive range of sizes and types tailored for your individual needs</h3>
        </div>
      </div>
    </section> 

  `,
  styles: [`
  .hero {
    background-image: url('/assets/images/kitchen.png') !important;
    background-position: center center;
    background-size: cover;
    background-color: #999;
}
.textColor{
  color:black;
}
    `]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
