import { Component } from "@angular/core";
import { AuthService } from "../authService/authService";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./login.html",
  styleUrls: ["./login.less"]
})
export class LoginForm {
  constructor(private authService: AuthService, private router: Router) {}
  userName;
  password;

  login(formValue, aboutToClick) {
    console.log("formValue==> ", formValue);

    if (formValue.userName === null || formValue.password === null) {
      return;
    } else {
      this.authService.logUserIn(formValue.userName, formValue.password);

      this.router.navigate(["/childs"]);
    }
  }
  consoleLoginForm(loginForm, ngModel) {
    console.log(loginForm);
    console.log(ngModel);
  }
}
