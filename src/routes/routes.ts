import { ChildComponent } from "../app/component/child/child";
import { ChildDetail } from "../app/component/child/chidDetail/childDetail";
import { Routes } from "@angular/router";
import { Parent } from "../app/component/manyChilds/parent";
import { CreateChild } from "../app/component/createChild/createChild";
import { ErrorPage } from "../app/component/error/error";
import { RoutesActivator } from "../app/routesActivator/routesActivator";
import { AjaxChildComponent } from "../app/component/ajaxChild/ajaxChild";
import { AjaxChildsResolver } from "../app/shared/ajaxResolveService";

export const appRoutes: Routes = [
  { path: "childs", component: ChildComponent },
  {
    path: "ajax-childs",
    component: AjaxChildComponent,
    resolve: { ajaxChildsResolved: AjaxChildsResolver }
  },
  {
    path: "childs/new",
    component: CreateChild,
    canDeactivate: ["canDeactivateCreateChild"]
  },
  {
    path: "childs/:id",
    component: ChildDetail,
    canActivate: [RoutesActivator]
  },
  { path: "parent", component: Parent },
  { path: "error", component: ErrorPage },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "user", loadChildren: "../user/userModule#UserModule" }
];
