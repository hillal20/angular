import { Component, OnInit } from "@angular/core";
import { GeneralService } from "src/app/shared/services";
import { ToastrService } from "ngx-toastr";

@Component({
  // selector: "child",
  templateUrl: "./child.html",
  styleUrls: ["./child.less"]
})
export class ChildComponent implements OnInit {
  childs: any[];

  constructor(
    private generalService: GeneralService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.childs = this.generalService.getChildrenData();
  }

  applyHobbiesStyle(el) {
    const hobbyStyle = el && el.hobby === "soccer";
    return {
      navy: hobbyStyle,
      textDecoration: hobbyStyle
    };
  }
  toastrEventHandler(name) {
    this.toastr.success(name);
  }
}
