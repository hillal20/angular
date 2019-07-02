import { BrowserModule } from "@angular/platform-browser";
import { NgModule, forwardRef } from "@angular/core";
import { NavBar } from "./component/nav/nav";
import { AppComponent } from "./component/app.component";
import { ChildComponent } from "./component/child/child";
import { Parent } from "./component/manyChilds/parent";
import { Kid } from "./component/manyChilds/kids/kid";
import { GrandChild1 } from "./component/manyChilds/kids/grandChild/grandChild1";
import { GrandGrandChild1 } from "./component/manyChilds/kids/grandChild/grandGrandChild1";
import { GeneralService } from "./shared/services";
import { ToastrServiceClass } from "./commonElements/toastr";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChildDetail } from "./component/child/chidDetail/childDetail";
import { appRoutes } from "../routes/routes";
import { RouterModule } from "@angular/router";
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
    ChildDetail
  ],
  providers: [GeneralService, ToastrServiceClass],

  bootstrap: [AppComponent]
})
export class AppModule {}
