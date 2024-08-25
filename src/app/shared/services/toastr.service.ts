/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import toastr from 'toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor() {
    // You can configure toastr options here if needed
    toastr.options = {
      closeButton: true,
      progressBar: true,
      timeOut: 3000,
      positionClass: 'toast-top-right',
    };
  }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
}
