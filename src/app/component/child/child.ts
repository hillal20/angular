import { Component, OnInit } from "@angular/core";
import { GeneralService } from "src/app/shared/services";
import { ToastrService } from "ngx-toastr";
import { IChild } from "src/app/shared/models/childsModel";

@Component({
  // selector: "child",
  templateUrl: "./child.html",
  styleUrls: ["./child.less"]
})
export class ChildComponent implements OnInit {
  childs: IChild[];

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
