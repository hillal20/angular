import { Injectable, OnInit } from "@angular/core";
import { ReplaySubject } from "rxjs/ReplaySubject";

@Injectable()
export class ReplaySubjectsService implements OnInit {
  constructor() {}
  ngOnInit() {}

  createReplaySubject() {
    const replaySubject = new ReplaySubject(3);
    return replaySubject;
  }
}
