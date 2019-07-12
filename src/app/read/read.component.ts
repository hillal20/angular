import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { IModel } from "../models/models";
import { AppState } from "../appState/appState";
import { Router } from "@angular/router";
import * as AllActions from "../actions/actions";
@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  items: Observable<IModel[]>;
  constructor(private store: Store<AppState>, private router: Router) {
    this.items = store.select("items");
  }
  deleteItems(index) {
    console.log("index===> ", index);
    this.store.dispatch(new AllActions.RemoveItems(index));
  }
  ngOnInit() {}
}
