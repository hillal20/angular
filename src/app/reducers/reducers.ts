import { Action } from "@ngrx/store";
import { IModel } from "../models/models";
import * as AllActions from "../actions/actions";

const initialState: IModel[] = [
  {
    name: "google items",
    url: "www.google.com"
  },
  {
    name: "google items",
    url: "www.google.com"
  },
  {
    name: "google items",
    url: "www.google.com"
  }
];

export const reducer = (
  state: IModel[] = [...initialState],
  action: AllActions.Actions
) => {
  switch (action.type) {
    case AllActions.add_items:
      state = [...state, action.payload];
      return state;
    case AllActions.remove_items:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
};
