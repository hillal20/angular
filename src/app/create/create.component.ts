import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../appState/appState";
import { reducer } from "../reducers/reducers";
import { Observable } from "rxjs";
import * as AllActions from "../actions/actions";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  addItemToList(name, url) {
    console.log(name, url);
    this.store.dispatch(new AllActions.AddItems({ name: name, url: url }));
  }
  ngOnInit() {}
}
