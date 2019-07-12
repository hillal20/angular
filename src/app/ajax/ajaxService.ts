import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";

import { throwError } from "rxjs";
import { IData } from "./dataInterface";
import axios from "axios";
@Injectable()
export class AjaxService {
  constructor(private http: HttpClient) {}

  getDataViaAxios() {
    let options: object = {
      headers: {
        token: "kkdkdkdkddkdkdkkk"
      }
    };

    return axios.get("http://localhost:4000/data", options);
  }
  getData(): Observable<IData> {
    try {
      let options: object = {
        headers: {
          token: "kkdkdkdkddkdkdkkk"
        }
      };
      return this.http.get<IData>("http://localhost:4000/data", options);
    } catch (error) {
      return Observable.throw(error.message);
    }
  }
}
