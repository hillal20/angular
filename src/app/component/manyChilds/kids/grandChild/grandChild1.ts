import { Component, Input } from "@angular/core";

@Component({
  selector: "grandChild1",
  template: `
    <div>
      <div>I am grand Child 1</div>
      <div>{{ obj1.event }}</div>
      <div>{{ obj1.location }}</div>
      <grandGrandChild1
        [detail]="details1"
        (sendEvent)="sendEventHandler($data)"
      ></grandGrandChild1>
    </div>
  `,
  styleUrls: ["./grandChild1.less"]
})
export class GrandChild1 {
  @Input() obj1: any;

  details1 = {
    id: 1,
    name: " John  Steve ",
    time: "10:10am",
    nickname: "jo",
    location: "NYC"
  };
  sendEventHandler(data: any) {
    console.log("data is here .......");
  }
}
