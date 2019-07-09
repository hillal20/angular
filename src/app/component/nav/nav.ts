import { Component } from "@angular/core";
import { ToastrServiceClass } from "../../commonElements/toastr";
import { AuthService } from "../../../user/authService/authService";
@Component({
  selector: "navbar",
  templateUrl: "./navBar.html",
  styleUrls: ["./navBar.less"]
})
export class NavBar {
  constructor(
    private toastr: ToastrServiceClass,
    private authService: AuthService
  ) {}

  toasterClassHandler() {
    this.toastr.success("helllo word success ");
  }
}
