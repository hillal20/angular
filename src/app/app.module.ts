import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { checkDirtyState } from "./helperFunctions/checkDirtyState";
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
  AuthService
} from "./index";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
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
    AjaxChildComponent
  ],
  providers: [
    GeneralService,
    ToastrServiceClass,
    RoutesActivator,
    AjaxGeneralService,
    AjaxChildsResolver,
    AuthService,
    {
      provide: "canDeactivateCreateChild",
      useValue: checkDirtyState
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
