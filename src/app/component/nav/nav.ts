import { Component } from "@angular/core";
import { ToastrServiceClass } from "../../commonElements/toastr";
@Component({
  selector: "navbar",
  templateUrl: "./navBar.html",
  styleUrls: ["./navBar.less"]
})
export class NavBar {
  constructor(private toastr: ToastrServiceClass) {}

  toasterClassHandler() {
    this.toastr.success("helllo word success ");
  }
}
