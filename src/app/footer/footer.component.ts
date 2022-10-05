import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer fixed-footer">
  <div>
  <!-- whatsapp -->
   <a style="color: #3b5998;" href="#!" role="button">
   <i class="fa fa-whatsapp fa-lg"></i>
  </a>
   
   <!-- Linkedin -->
   <a target="_blank" style="color: #55acee;" href="https://www.linkedin.com/company/crownwoods/" role="button"
     ><i class="fa fa-linkedin fa-lg"></i
   ></a>
   
   
   <!-- Instagram -->
   <a style="color: #ac2bac;" href="#!" role="button"
     ><i class="fa fa-facebook fa-lg"></i
   ></a>
  </div>

  <div> Made with ♥ by Crown Woods</div> 
  </footer>
  `,
  styles: [`
  .footer {
    background-color: #fafafa;
    padding: 0.75rem 0.5rem 0.5rem;
  }
  .fixed-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
      }
  i {
    margin-right: 20px;
  }    
      `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
