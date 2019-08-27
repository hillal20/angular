import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { checkDirtyState } from "./helperFunctions/checkDirtyState";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/reducers";
import { HttpClientModule } from "@angular/common/http";
import { AjaxService } from "../app/ajax/ajaxService";
import { ObservablesService } from "../app/observablesToturial/observableServices";
import { SubjectsService } from "../app/subjectsToturial/subjectsServices";
import { OpsService } from "./operators/operatorsService";
import {
  AppComponent,
  ChildComponent,
  Parent,
  NavBar,
  Kid,
  GrandChild1,
  GrandGrandChild1,
  GeneralService,
  AjaxGeneralService,
  AjaxChildsResolver,
  ToastrServiceClass,
  ToastrModule,
  BrowserAnimationsModule,
  ChildDetail,
  appRoutes,
  RouterModule,
  CreateChild,
  ErrorPage,
  RoutesActivator,
  AjaxChildComponent,
  AuthService,
  CreateSession,
  Sessions,
  // ReadComponent,
  // CreateComponent,
  ObservableComponent,
  Ajax,
  SubjectsComponent,
  BehavioralSubjectComponent,
  BehavioralSubjectsService,
  ReplaySubjectComponent,
  ReplaySubjectsService,
  OperatorComponent,
  Child22,
  Parent2
} from "./index";
import { TableauComponent } from "./tableau/tableau";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ items: reducer }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    NavBar,
    ChildComponent,
    Parent,
    Kid,
    GrandChild1,
    GrandGrandChild1,
    ChildDetail,
    CreateChild,
    ErrorPage,
    AjaxChildComponent,
    CreateSession,
    Sessions,
    // ReadComponent,
    // CreateComponent,
    Ajax,
    ObservableComponent,
    SubjectsComponent,
    BehavioralSubjectComponent,
    ReplaySubjectComponent,
    OperatorComponent,
    Child22,
    Parent2,
    TableauComponent
  ],
  providers: [
    GeneralService,
    ToastrServiceClass,
    RoutesActivator,
    AjaxGeneralService,
    AjaxChildsResolver,
    AuthService,
    AjaxService,
    ObservablesService,
    SubjectsService,
    BehavioralSubjectComponent,
    BehavioralSubjectsService,
    ReplaySubjectsService,
    OpsService,

    {
      provide: "canDeactivateCreateChild",
      useValue: checkDirtyState
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
