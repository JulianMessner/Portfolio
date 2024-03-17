import { CommonModule, NgSwitch } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, HostListener, ElementRef } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LanguageService, Translation } from '../../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSwitch],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './contact2.component.scss',
    './contact3.component.scss',
    './responsive-contact.component.scss',
  ],
})
export class ContactComponent {
  isScrolledIntoView = false;

  http = inject(HttpClient);

  form = {
    fullname: '',
    email: '',
    message: '',
    acceptPolicy: false,
  };

  submitStatus: 'idle' | 'loading' | 'success' = 'idle';

  mailTest = false;

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

  constructor(
    private el: ElementRef,
    private languageService: LanguageService
  ) {}

  
  /**
   * Retrieves translation for the given key from LanguageService.
   * @param {keyof Translation} key - The key for translation.
   * @returns {string} - The translated string.
   */
  getTranslation(key: keyof Translation): string {
    return this.languageService.getTranslation(key);
  }


  /**
   * Listener for scroll events on the window to determine if the component is in view.
   */
  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isPartiallyInView = rect.top <= windowHeight && rect.bottom >= 500;

    if (!this.isScrolledIntoView && isPartiallyInView) {
      this.isScrolledIntoView = true;
    }
  }


  /**
   * Handles the form submission.
   * If the form is valid and not a mail test, submits the form data.
   * If it is a mail test, resets the form after a delay.
   * @param {NgForm} ngForm - The NgForm instance representing the form.
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      if (!this.mailTest) {
        this.submitForm(this.form, ngForm);
      } else {
        this.resetForm(ngForm);
      }
    }
  }


  /**
   * Submits the form data via HTTP POST request.
   * Updates the submit status accordingly.
   * @param {any} formData - The form data to be submitted.
   * @param {NgForm} ngForm - The NgForm instance representing the form.
   */
  private submitForm(formData: any, ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(formData)).subscribe({
      next: (response) => {
        this.submitStatus = 'loading';
        setTimeout(() => {
          this.submitStatus = 'success';
          this.resetForm(ngForm);
        }, 2000);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }


  /**
   * Resets the form after a delay and updates the submit status.
   * @param {NgForm} ngForm - The NgForm instance representing the form.
   */
  private resetForm(ngForm: NgForm) {
    setTimeout(() => {
      this.submitStatus = 'idle';
      ngForm.resetForm();
    }, 2000);
  }


  /** Retrieves the text for the button based on the current submit status */
  getButtonStatusText(): string {
    switch (this.submitStatus) {
      case 'idle':
        return this.getTranslation('idleButtonText');
      case 'loading':
        return this.getTranslation('loadingButtonText');
      case 'success':
        return this.getTranslation('successButtonText');
      default:
        return this.getTranslation('idleButtonText');
    }
  }
}
