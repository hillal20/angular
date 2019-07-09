import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from "./userRoutes";
import { FormsModule } from "@angular/forms";
import { Profile } from "./profile";
import { LoginForm } from "./form/loginForm";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), FormsModule],
  declarations: [Profile, LoginForm],
  providers: []
})
export class UserModule {}
