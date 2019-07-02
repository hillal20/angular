import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class ToastrServiceClass {
  constructor(private toasrt: ToastrService) {}
  success(message: string, title?: string) {
    this.toasrt.success(message, title);
  }
  info(message: string, title?: string) {
    this.toasrt.info(message, title);
  }
  warning(message: string, title?: string) {
    this.toasrt.warning(message, title);
  }
  error(message: string, title?: string) {
    this.toasrt.error(message, title);
  }
}
