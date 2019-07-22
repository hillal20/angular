import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Component({
  templateUrl: "./parent.html",
  styleUrls: ["./parent.less"]
})
export class Parent2 implements OnInit {
  obj = {
    number: 0
  };
  subject = new BehaviorSubject({ x: 0 });
  value = 0;

  constructor() {}
  ngOnInit() {}

  increment() {
    const newObj = { number: ++this.obj.number };
    this.obj = newObj;
    ////////////////////////
    const obj = { x: ++this.value };
    this.subject.next(obj);
  }
}
