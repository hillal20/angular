import { Component, OnInit } from "@angular/core";
import { ObservablesService } from "./observableServices";

@Component({
  templateUrl: "./observableComponent.html",
  styleUrls: ["./observableComponent.less"]
})
export class ObservableComponent implements OnInit {
  constructor(private observableServices: ObservablesService) {}

  ngOnInit() {
    const observable = this.observableServices.createObservable();
    const observer1 = observable.subscribe(
      data => {
        this.createHTMLElements("subscription1 ===>" + data);
      },
      err => {
        this.createHTMLElements(err);
      },
      () => {
        this.createHTMLElements("=== completed ==== ");
      }
    );

    /// let have another observer
    const observer2 = observable.subscribe(data => {
      this.createHTMLElements("subscription2 ===>" + data);
    });

    // stopping the observers via timeout
    setTimeout(() => {
      observer1.unsubscribe();
      //   observer2.unsubscribe();
    }, 8000);
    /**  another way to stope then called
     * childs un-subscription which is :
     * if one stopped the second will stop
     *
     */
    observer1.add(observer2);

    //  hot an cold observers
    const observer3 = observable.subscribe(data => {
      this.createHTMLElements("subscription3 ===>" + data);
    });

    setTimeout(() => {
      observer3.unsubscribe();
    }, 8000);
  }
  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("output").append(node);
  }
}
