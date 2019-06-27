import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./component/app.component";
import { ChildComponent } from "./component/child/child";
import { Parent } from "./component/manyChilds/parent";
import { Kid } from "./component/manyChilds/kids/kid";
import { GrandChild1 } from "./component/manyChilds/kids/grandChild/grandChild1";
import { GrandGrandChild1 } from "./component/manyChilds/kids/grandChild/grandGrandChild1";
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Parent,
    Kid,
    GrandChild1,
    GrandGrandChild1
  ],

  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
