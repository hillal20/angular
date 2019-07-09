import { Injectable } from "@angular/core";
import { IUser } from "./userModel";
@Injectable()
export class AuthService {
  user: IUser;

  logUserIn(userName: string, password: string) {
    this.user = {
      id: 1,
      firstName: "hilal",
      lastName: "aissani",
      userName: userName,
      password: password
    };
  }
  userAuthenticated() {
    return !!this.user;
  }
}
