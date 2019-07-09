import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../../shared/services";
import { ActivatedRoute } from "@angular/router";
import { IChild } from "/Users/hilal/angular/angularApp/src/app/shared/models/childsModel";

@Component({
  templateUrl: "./childDetail.html",
  styleUrls: ["./childDetail.less"]
})
export class ChildDetail implements OnInit {
  child: IChild;
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
