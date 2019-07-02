import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../../shared/services";

@Component({
  templateUrl: "./childDetail.html",
  styleUrls: ["./childDetail.less"]
})
export class ChildDetail implements OnInit {
  child: any;
  constructor(private generalService: GeneralService) {}
  ngOnInit() {
    return (this.child = this.generalService.getSingleChild(1));
  }
}
