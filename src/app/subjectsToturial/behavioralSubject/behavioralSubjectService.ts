import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class BehavioralSubjectsService implements OnInit {
  constructor() {}
  ngOnInit() {}

  createBehavioralSubject() {
    const behavioralSubject = new BehaviorSubject(
      "behavioral subject created "
    );
    return behavioralSubject;
  }
}
