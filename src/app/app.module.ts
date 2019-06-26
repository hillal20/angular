import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./component/app.component";
import { ChildComponent } from "./component/child/child";
import { Parent } from "./component/manyChilds/parent";
import { Kid } from "./component/manyChilds/kids/kid";
@NgModule({
  declarations: [AppComponent, ChildComponent, Parent, Kid],

  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
