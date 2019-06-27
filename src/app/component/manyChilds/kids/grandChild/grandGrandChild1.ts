import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "grandGrandChild1",
  templateUrl: "./grandGrandChild1.html",
  styleUrls: ["./grandGrandChild1.less"]
})
export class GrandGrandChild1 {
  @Input() detail: any;
  @Output() sendEvent = new EventEmitter();

  handlerClick() {
    let el = document.querySelector(".ggChild1");
    console.log("el ==> ", el);
    console.log("eventClick ===> ", this.sendEvent);
    this.sendEvent.emit({ bill: "fooo" });
  }
}
