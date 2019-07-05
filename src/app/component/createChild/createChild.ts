import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  templateUrl: "./createChild.html",
  styleUrls: ["./createChild.less"]
})
export class CreateChild {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  submit() {
    alert("submit");
    this.router.navigate(["./submit"]);
  }
  cancel() {
    this.router.navigate(["./childs"]);
  }
}
