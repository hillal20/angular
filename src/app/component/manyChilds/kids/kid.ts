import { Component } from "@angular/core";

@Component({
  selector: "kid",
  templateUrl: "./kid.html",
  styleUrls: ["./kid.less"]
})
export class Kid {
  obj = {
    event: "party",
    location: " Egypt"
  };
}
