import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

// you have to include:  npm install --save rxjs-compat
@Injectable()
export class OpsService implements OnInit {
  constructor() {}
  ngOnInit() {}

  createObservables() {
    const observable1 = new Observable((producerParam: any) => {
      try {
        producerParam.next("hey guys 1 ??????");
        producerParam.next("hey guys 2 ??????");
      } catch (err) {
        producerParam.error(err);
      }
    });
    const observable2 = new Observable((producerParam: any) => {
      try {
        producerParam.next("how are you guys 1  ??????");
        producerParam.next("how are you guys 2 ??????");
      } catch (err) {
        producerParam.error(err);
      }
    });

    const observable3 = new Observable((producerParam: any) => {
      try {
        producerParam.next("  i am mapping 1  ??????");
        producerParam.next("i am mapping  2 ??????");
      } catch (err) {
        producerParam.error(err);
      }
    });
    const observable4 = new Observable((producerParam: any) => {
      try {
        let i = 1;
        setInterval(() => {
          producerParam.next(i++);
        }, 1000);
      } catch (err) {
        producerParam.error(err);
      }
    });
    const subject1 = new Subject();

    return { observable1, observable2, observable3, observable4, subject1 };
  }
}
