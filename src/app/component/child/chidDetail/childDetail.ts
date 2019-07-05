import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../../shared/services";
import { ActivatedRoute } from "@angular/router";
@Component({
  templateUrl: "./childDetail.html",
  styleUrls: ["./childDetail.less"]
})
export class ChildDetail implements OnInit {
  child: any;
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    return (this.child = this.generalService.getSingleChild(
      +this.route.snapshot.params["id"]
    ));
  }
}
