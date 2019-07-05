import { Component, OnInit } from "@angular/core";
import { AjaxGeneralService } from "src/app/shared/ajaxService";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute } from "@angular/router";

@Component({
  // selector: "child",
  templateUrl: "./ajaxChild.html",
  styleUrls: ["../child/child.less"]
})
export class AjaxChildComponent implements OnInit {
  ajaxChilds: any;

  constructor(
    private ajaxGeneralService: AjaxGeneralService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.ajaxGeneralService.getAjaxChildrenData().subscribe(ajaxChilds => {
    //   this.ajaxChilds = ajaxChilds;
    // });
    console.log(this.route.snapshot);
    // ===> we use the above  if there is no ActivatedRoute && resolver
    this.ajaxChilds = this.route.snapshot.data["ajaxChildsResolved"];
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
