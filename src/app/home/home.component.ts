import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-centered-text">
          <h1 class="title">We provide high quality products at best price</h1>
        </div>
      </div>
    </section> 

  `,
  styles: [`
  .hero {
    background-image: url('/assets/images/lightspace.png') !important;
    background-position: center center;
    background-size: cover;
    background-color: #999;
}
.h1{
  color:black;
}
    `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
