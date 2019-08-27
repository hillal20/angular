import { ChildComponent } from "../app/component/child/child";
import { ChildDetail } from "../app/component/child/chidDetail/childDetail";
import { Routes } from "@angular/router";
import { CreateSession } from "../app/component/createSession/createSession";
import { Parent } from "../app/component/manyChilds/parent";
import { CreateChild } from "../app/component/createChild/createChild";
import { ErrorPage } from "../app/component/error/error";
import { RoutesActivator } from "../app/routesActivator/routesActivator";
import { AjaxChildComponent } from "../app/component/ajaxChild/ajaxChild";
import { AjaxChildsResolver } from "../app/shared/ajaxResolveService";
import { CreateComponent } from "../app/create/create.component";
import { ReadComponent } from "../app/read/read.component";
import { ObservableComponent } from "../app/observablesToturial/observables";
import { SubjectsComponent } from "../app/subjectsToturial/subjectsToturial";
import { BehavioralSubjectComponent } from "../app/subjectsToturial/behavioralSubject/behavioralSubject";
import { ReplaySubjectComponent } from "../app/subjectsToturial/replaySubject/relpaySubject";
import { Ajax } from "../app/ajax/ajax";
import { OperatorComponent } from "../app/operators/operators";
import { Child22 } from "../app/refDetection/child/child";
import { Parent2 } from "../app/refDetection/parent/parent";
import { TableauComponent } from "../app/tableau/tableau";
export const appRoutes: Routes = [
  { path: "tableau", component: TableauComponent },
  { path: "childs", component: ChildComponent },
  { path: "observable", component: ObservableComponent },
  { path: "subject", component: SubjectsComponent },
  { path: "behavioral", component: BehavioralSubjectComponent },
  { path: "replay", component: ReplaySubjectComponent },
  { path: "operator", component: OperatorComponent },

  { path: "Parent2", component: Parent2 },
  // { path: "read", component: ReadComponent },
  // // { path: "create", component: CreateComponent },
  { path: "ajax", component: Ajax },
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
  { path: "create-session", component: CreateSession },
  { path: "error", component: ErrorPage },
  { path: "", redirectTo: "/", pathMatch: "full" },
  { path: "user", loadChildren: "../user/userModule#UserModule" }
];
