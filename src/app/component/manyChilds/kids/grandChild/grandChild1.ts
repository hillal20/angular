import { Component, Input } from "@angular/core";

@Component({
  selector: "grandChild1",
  template: `
    <div class="grandChild1">
      <div>I am grand Child 1</div>
      <div>{{ obj1.event }}</div>
      <div>{{ obj1.location }}</div>
      <grandGrandChild1
        [detail]="details1"
        #ggChild
        (sendEvent)="sendEventHandler($event)"
      ></grandGrandChild1>
      <h1>{{ ggChild.ggChildProperty }}</h1>
      <button (click)="ggChild.showDetail()">Show Detail</button>
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
  sendEventHandler(data) {
    console.log("data is here .......", data);
  }
}
