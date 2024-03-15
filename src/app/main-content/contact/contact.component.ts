import { CommonModule, NgSwitch } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSwitch],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isScrolledIntoView = false;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll() {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
        const isPartiallyInView = rect.top <= windowHeight && rect.bottom >= 500;
  
      if (!this.isScrolledIntoView && isPartiallyInView) {
          this.isScrolledIntoView = true;
      }
  }

  http = inject(HttpClient);

  form = {
    fullname: '',
    email: '',
    message: '',
    acceptPolicy: false,
  };

  submitStatus: 'idle' | 'loading' | 'success' = 'idle';

//   onSubmit(form: NgForm): void {
//     this.submitStatus = 'loading';

//     setTimeout(() => {
//       console.log(JSON.stringify(this.form));
//       form.resetForm();
//       this.submitStatus = 'success';
//       setTimeout(() => {
//         this.submitStatus = 'idle';
//       }, 2000);
//     }, 2000);
// }


  mailTest = true;

  post = {
    endPoint: 'https://julian-messner.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.form)).subscribe({
        next: (response) => {
          (this.submitStatus = 'loading'), ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.info('send post complete'),
            setTimeout(() => {
              this.submitStatus = 'success';
            }, 2000);
        },
      });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      setTimeout(() => {
        this.submitStatus = 'idle';
      }, 2000);
      ngForm.resetForm();
    }
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
