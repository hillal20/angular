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

    subject.subscribe(
      data => {
        this.createHTMLElements(" observer1 ===> " + data);
      },
      err => {
        this.createHTMLElements(err);
      },
      () => {
        this.createHTMLElements("==completed===");
      }
    );
    subject.next("subject is sending....");
  }
  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("subject").append(node);
  }
}
