import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { GeneralService } from "../shared/services";

@Injectable()
export class RoutesActivator implements CanActivate {
  constructor(private childs: GeneralService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const result = !!this.childs.getSingleChild(+route.params["id"]);
    console.log("result ==> ");
    if (!result) {
      this.router.navigate(["./error"]);
      return false;
    } else {
      return true;
    }
  }
}
