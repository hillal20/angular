import { ChildComponent } from "../app/component/child/child";
import { ChildDetail } from "../app/component/child/chidDetail/childDetail";
import { Routes } from "@angular/router";
export const appRoutes: Routes = [
  { path: "childs", component: ChildComponent },

  { path: "childs/:id", component: ChildDetail },
  { path: "", redirectTo: "/", pathMatch: "full" }
];
