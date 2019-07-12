import { Component, Input } from "@angular/core";
import { ISession } from "src/app/shared/models/childsModel";

@Component({
  selector: "sessions",

  templateUrl: "./sessions.html",
  styleUrls: ["./sessions.less"]
})
export class Sessions {
  @Input() sessionsList: ISession[];
}
