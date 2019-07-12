import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AjaxService } from "./ajaxService";

@Component({
  templateUrl: "./ajax.html",
  styleUrls: ["./ajax.less"]
})
export class Ajax implements OnInit {
  data: any;
  data2: any;
  errorMsg: any;

  constructor(private ajaxService: AjaxService) {}

  ngOnInit() {
    this.ajaxService
      .getDataViaAxios()
      .then(msg => {
        console.log("msg==> ", msg);
        this.data2 = msg.data.arr;
      })
      .catch(err => {
        console.log(err);
      });

    this.ajaxService.getData().subscribe(
      data => {
        this.data = data.arr;
      },
      err => {
        this.errorMsg = err;
      },
      () => {
        console.log("===> observer completed ====");
      }
    );
  }
}
