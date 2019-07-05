import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./userRoutes";
import { Profile } from "./profile";
@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
  declarations: [Profile],
  providers: []
})
export class UserModule {}
