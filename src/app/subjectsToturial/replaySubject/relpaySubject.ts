import { Component, OnInit } from "@angular/core";
import { ReplaySubjectsService } from "./replaySubjectService";

@Component({
  templateUrl: "./replaySubject.html",
  styleUrls: ["./replaySubject.less"]
})
export class ReplaySubjectComponent implements OnInit {
  constructor(private replaySubjectServices: ReplaySubjectsService) {}

  ngOnInit() {
    const rSubject = this.replaySubjectServices.createReplaySubject();
    const observer1 = rSubject.subscribe(
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
    rSubject.next(" first  message is sent ");
    rSubject.next(" second message is sent  ");
    rSubject.next(" third message is sent  ");
    rSubject.next(" fourth message is sent  ");

    const observer2 = rSubject.subscribe(data => {
      this.createHTMLElements("observer 2 ===> " + data);
    });

    rSubject.next(" fifth  message is sent ");
    rSubject.next(" 6th  message is sent ");
    rSubject.next(" 7th  message is sent ");
  }

  createHTMLElements(x: any) {
    let node = document.createElement("li");
    let innerText = document.createTextNode(x);
    node.append(innerText);
    document.getElementById("replay").append(node);
  }
}
