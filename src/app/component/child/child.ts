import { Component } from "@angular/core";

@Component({
  selector: "child",
  templateUrl: "./child.html",
  styleUrls: ["./child.less"]
})
export class ChildComponent {
  child = {
    name: "hilal",
    lassName: " aissani",
    age: "settara",
    elements: [1, 23, 15, 17]
  };
}
