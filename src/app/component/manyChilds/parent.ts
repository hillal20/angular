import { Component } from "@angular/core";

@Component({
  selector: "parent",

  template: `
    <div class="parent">
      this is the parent
      <kid>{{ obj }}</kid>
    </div>
  `,
  styleUrls: ["./parent.less"]
})
export class Parent {
  obj = {
    event: "party",
    location: " Egypt"
  };
}
