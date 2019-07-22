import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import "rxjs/operators/share";
// you have to include:  npm install --save rxjs-compat
@Injectable()
export class ObservablesService implements OnInit {
  constructor() {}
  ngOnInit() {}

  createObservable() {
    return Observable.create((producerParam: any) => {
      try {
        producerParam.next("hey guys ??????");
        producerParam.next(" how are you  ??????");

        setInterval(() => {
          producerParam.next("I am good");
        }, 2000);
        // observer.complete();
      } catch (err) {
        producerParam.error(err);
      }
    }).share();
  }
}
