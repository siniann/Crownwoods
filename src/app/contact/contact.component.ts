import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
 
  <section class="hero is-primary is-bold">
    <div class="hero-body">
      <div class="container has-centered-text">
        <h1 class="title">Contact us</h1>

      <form  [formGroup]="myForm" action="https://formsubmit.co/el/cofawo" method="POST" (ngSubmit)="onSubmit(myForm)">
            <div class="field">
            <label class="label">Name</label>
            <div class="control has-icons-left
                        has-icons-right">
              <input
              formControlName="name" 
                class="input"
                type="text"
                placeholder="Enter your name"
              />
              <div *ngIf="myForm.get('name')?.invalid &&  myForm.get('name')?.touched"
              class="alert alert-danger">
              </div>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>   
          </div>
          <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left
                      has-icons-right">
            <input
            formControlName="email" 
              class="input"
              type="email"
              placeholder="Enter your email"
            />
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <div *ngIf="myForm.get('email')?.invalid && myForm.get('email')?.touched" class="has-text-danger">
          Please provide a valid email address.
        </div>    
        </div>
        <div class="field">
        <label class="label">
          Message
        </label>
        <div class="control">
          <textarea
          formControlName="message" 
            class="textarea"
            placeholder="Want to tell anything?"
            required
          ></textarea>
        </div>
      </div>  


        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success"
                    type="submit"  [disabled]="myForm.invalid"
            >
            Send
            </button>
          </div>
          <div *ngIf="isSubmitted" class="alert alert-success box-msg" role="alert"> 
           <strong>We will get back to you soon!</strong> Thanks for contacting!
          </div>
        </div>
      </form>
      </div>
    </div>
  </section>
  
  `,

  styles: [`
.hero {
  background-image: url('/assets/images/panel.png') !important;
  background-position: center center;
  background-size: cover;
  background-color: #999;
}

  `]
})
export class ContactComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  isSubmitted = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(form: FormGroup) {
    this.isSubmitted = true;

    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    this.myForm.reset();


  }
}