import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { GeneralService } from "../../shared/services";
@Component({
  templateUrl: "./createChild.html",
  styleUrls: ["./createChild.less"]
})
export class CreateChild {
  isDirty: boolean = true;
  newChild;
  constructor(private router: Router, private generalService: GeneralService) {}
  submit(createChildForm) {
    this.generalService.saveChild(createChildForm);
    console.log("GS ===>", createChildForm);
    this.router.navigate(["/childs"]);
  }
  cancel() {
    this.router.navigate(["/childs"]);
  }
}
