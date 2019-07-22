import { Component, OnInit } from "@angular/core";
import { SubjectsService } from "./subjectsServices";

@Component({
  templateUrl: "./subjectsToturial.html",
  styleUrls: ["./subjectsToturial.less"]
})
export class SubjectsComponent implements OnInit {
  constructor(private subjectServices: SubjectsService) {}

  ngOnInit() {
    const subject = this.subjectServices.createSubject();

    const observer1 = subject.subscribe(
      data => {
        this.createHTMLElements("observer1 ===> " + data);
      },
      err => {
        this.createHTMLElements(err);
      },
      () => {
        this.createHTMLElements("==completed===");
      }
    );
    subject.next("first message ....");

    const observer2 = subject.subscribe(data => {
      this.createHTMLElements(" Observer2 ==> " + data);
    });
    subject.next("second message ....");
    subject.next(" third  message ....");
    observer2.unsubscribe();
    subject.next(" final   message ....");
  }
  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("subject").append(node);
  }
}
