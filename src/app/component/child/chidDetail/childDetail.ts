import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../../../shared/services";
import { ActivatedRoute } from "@angular/router";
import {
  IChild,
  ISession
} from "/Users/hilal/angular/angularApp/src/app/shared/models/childsModel";

@Component({
  templateUrl: "./childDetail.html",
  styleUrls: ["./childDetail.less"]
})
export class ChildDetail implements OnInit {
  child: IChild;
  addSessionSwitch: boolean;
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    return (this.child = this.generalService.getSingleChild(
      +this.route.snapshot.params["id"]
    ));
  }
  addSession() {
    return (this.addSessionSwitch = true);
    // this.router.navigate(["/create-session"]);
  }
  catchingSaveNewSession(session: ISession) {
    console.log("adding new session ");
    const nextId = Math.max.apply(
      null,
      this.child.sessions.map(s => {
        console.log(s.id);
        return s.id;
      })
    );
    session.id = nextId + 1;
    console.log("new new ===> ", session);
    this.child.sessions.push(session);
    this.addSessionSwitch = false;
  }
}
