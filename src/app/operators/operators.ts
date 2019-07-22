import { Component, OnInit } from "@angular/core";
import { OpsService } from "./operatorsService";
import { merge } from "rxjs/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/operator/skipUntil";
@Component({
  templateUrl: "./operators.html",
  styleUrls: ["./operators.less"]
})
export class OperatorComponent implements OnInit {
  constructor(private operatorServices: OpsService) {}

  ngOnInit() {
    const observable1 = this.operatorServices.createObservables().observable1;
    const observable2 = this.operatorServices.createObservables().observable2;
    const observable3 = this.operatorServices.createObservables().observable3;
    const observable4 = this.operatorServices.createObservables().observable4;
    const subject1 = this.operatorServices.createObservables().subject1;

    const observer1 = observable1.subscribe(
      data => {
        this.createHTMLElements("observer 1 ===>" + data);
      },
      err => {
        this.createHTMLElements(err);
      },
      () => {
        this.createHTMLElements("=== completed ==== ");
      }
    );

    /// let have another observer
    const observer2 = observable2.subscribe(data => {
      this.createHTMLElements(" observer 2 ===>" + data);
    });

    setTimeout(() => {
      observer1.unsubscribe();
    }, 7000);
    observer1.add(observer2);

    const mergedObservables = merge(observable1, observable2);

    const mergedObserver = mergedObservables.subscribe(data => {
      this.createHTMLElements("merged Observer ===> " + data);
    });
    // using map
    const observer3 = observable3
      .map(value => {
        return value.toString().toUpperCase();
      })
      .subscribe(data => {
        this.createHTMLElements("observer 3 ==> " + data);
      });

    // using pluck and skipUntil
    setTimeout(() => {
      subject1.next("heyyyyy !!!");
    }, 5000);
    const observableSubject = observable4.skipUntil(subject1);
    observableSubject.subscribe(data => {
      this.createHTMLElements(" observable && subject ===> " + data);
    });
  }

  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("operators").append(node);
  }
}
