import { Component, OnInit } from "@angular/core";
import { GeneralService } from "src/app/shared/services";
import { ToastrService } from "ngx-toastr";
import { IChild, ISession } from "src/app/shared/models/childsModel";
import { Router } from "@angular/router";
@Component({
  // selector: "child",
  templateUrl: "./child.html",
  styleUrls: ["./child.less"]
})
export class ChildComponent implements OnInit {
  childs: IChild[];

  constructor(
    private generalService: GeneralService,
    private toastr: ToastrService,
    private router: Router
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
