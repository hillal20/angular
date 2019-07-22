import { Component, OnInit } from "@angular/core";
import { BehavioralSubjectsService } from "./behavioralSubjectService";

@Component({
  templateUrl: "./behavioralSubject.html",
  styleUrls: ["./behavioralSubject.less"]
})
export class BehavioralSubjectComponent implements OnInit {
  constructor(private behavioralSubjectServices: BehavioralSubjectsService) {}

  ngOnInit() {
    const bSubject = this.behavioralSubjectServices.createBehavioralSubject();
    const observer1 = bSubject.subscribe(
      data => {
        this.createHTMLElements("observer 1 ===> " + data);
      },
      err => {
        this.createHTMLElements(err);
      },
      () => {
        this.createHTMLElements(" === completed");
      }
    );
    bSubject.next(" first  message is sent ");
    bSubject.next(" second message is sent  ");
    bSubject.next(" third message is sent  ");

    const observer2 = bSubject.subscribe(data => {
      this.createHTMLElements("observer 2 ===> " + data);
    });

    bSubject.next(" fourth  message is sent ");
  }

  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("behavioral").append(node);
  }
}
