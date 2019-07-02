import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "grandGrandChild1",
  templateUrl: "./grandGrandChild1.html",
  styleUrls: ["./grandGrandChild1.less"]
})
export class GrandGrandChild1 {
  @Input() detail: any;
  @Output() sendEvent = new EventEmitter();
  ggChildProperty: any = "ggChild value is here";
  handlerClick() {
    let el = document.querySelector(".ggChild1");

    this.sendEvent.emit({
      id: 5,
      location: "NYC",
      company: "Google",
      team: "Man city ",
      name: this.detail.name
    });
  }
  showDetail() {
    console.log("=== showDetail ===");
  }
}
