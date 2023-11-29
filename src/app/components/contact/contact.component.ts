import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/service/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  contactForm: FormGroup

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      message: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  onSubmit() {
    const formValue = this.contactForm.value

    console.log(formValue);
    this.emailService.sendContactForm(formValue).subscribe(
      (response) => {
        console.log(response);
        this.successAlert()
        this.contactForm.reset()
      }, (error) => {
        console.log(error);
      }
    )

  }

  successAlert() {
    Swal.fire({
      text: "Message successfully send to our contact support. Please wait for further response.",
      icon: "success",
      confirmButtonText: "OK",
      showCloseButton: true,
      confirmButtonColor: '#1A56DB',
    });
  }

}
