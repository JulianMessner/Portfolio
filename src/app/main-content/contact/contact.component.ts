import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  form = {
    fullname: '',
    email: '',
    message: '',
    acceptPolicy: false,
  };

  onSubmit(form: NgForm): void {
    console.log(JSON.stringify(this.form));
    form.resetForm();
  }

  onReset(form: NgForm): void {
      form.resetForm();
  } 

}
