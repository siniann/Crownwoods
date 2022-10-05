import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
	<a class="navbar-brand" href="/"><img class ="logo" src="assets/images/logo.png" > </a>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" (click)="toggleNavbar()">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent" [ngClass]="{ 'show': isCollapsed }">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
		    <a class="nav-link" (click)="ScrollIntoView('#sliderSection');toggleNavbar()" >Home <span class="sr-only">(current)</span></a>        
      </li>
      <li class="nav-item">
        <a class="nav-link" (click)="ScrollIntoView('#productsSection');toggleNavbar()"  >Products</a>
      </li>

      <li class="nav-item">
      <a class="nav-link" (click)="ScrollIntoView('#homeSection');toggleNavbar()" >About Us</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" (click)="ScrollIntoView('#contactSection');toggleNavbar()">Contact Us</a>
  </li>
      <li class="nav-item">
        <a class="nav-link"  >  <a style="color: green;" role="text"
        ><i class="fa fa-whatsapp fa-lg "></i
      >  +91 8921618495</a></a>
      </li>      
    </ul>
  </div>
</nav>
</div>
  `,
  styles: [
    `
    .logo{
      max-height: 5.5rem;
      padding: 0.05rem 0.5rem 0.5rem;
    } 
    a{
      text-align:center;
    }
    a:hover {
      background-color: lightgrey;
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isCollapsed = false;

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  ScrollIntoView(elem: string) {
    console.log("Scroll to: " + elem);
    document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  ngOnInit(): void {

  }
}
