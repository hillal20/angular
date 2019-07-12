import { Injectable } from "@angular/core";
import { IModel } from "../models/models";
import { Action } from "@ngrx/store";

export const add_items = "[ITEMS] add";
export const remove_items = "[ITEMS] remove";

export class AddItems implements Action {
  readonly type = add_items;
  constructor(public payload: IModel) {}
}

export class RemoveItems implements Action {
  readonly type = remove_items;
  constructor(public payload: number) {}
}
export type Actions = AddItems | RemoveItems;
