import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import "rxjs/add/operator/share";
// you have to include:  npm install --save rxjs-compat
@Injectable()
export class SubjectsService implements OnInit {
  constructor() {}
  ngOnInit() {}

  createSubject() {
    const subject = new Subject();
    return subject;
  }
}
