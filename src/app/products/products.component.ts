import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
  <div class="columns is-vcentered">
    <div class="column is-5-tablet is-5-desktop">
      <div class="myHero addPadding">
        <h1>Our Products</h1>
        <div class="hr"></div>

        <p>We offer waterproof wood substitute solutions, WPC doors, frames, boards and PVC Foam Board.  These products made of wood fibre and plastic are perfect alternative for natural wood. This green material has more internal strength and can be recycled. Highly durable with high water resistance and 100% termite-proof.</p>
      </div>
    </div>
    <div class="column is-7-tablet is-7-desktop">
      <figure class="image is4by3">
        <img src="../assets/images/a.png">
      </figure>
    </div>
  </div>
  `,
  styles: [
    `
    .addPadding h1{
      text-align: center;
      padding: 1rem 1.5rem 0.5rem;
    }
    .addPadding p{
      padding: 0.75rem 1.5rem 0.5rem;
      text-align: center;

    }
    `
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
