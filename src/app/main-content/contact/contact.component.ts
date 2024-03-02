import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSwitch],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  form = {
    fullname: '',
    email: '',
    message: '',
    acceptPolicy: false,
  };

  submitStatus: 'idle' | 'loading' | 'success' = 'idle';

  onSubmit(form: NgForm): void {
    this.submitStatus = 'loading';
    
    setTimeout(() => {
      console.log(JSON.stringify(this.form));
      form.resetForm();
      this.submitStatus = 'success';
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 2000);
    }, 2000);
  }

  getButtonStatusText(): string {
    switch (this.submitStatus) {
      case 'idle':
        return 'Send message :)';
      case 'loading':
        return 'Loading...';
      case 'success':
        return 'Message sent :)';
      default:
        return 'Send message :)';
    }
  }
}
