import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { AjaxGeneralService } from "./ajaxService";
import { map } from "rxjs/operators";

@Injectable()
export class AjaxChildsResolver implements Resolve<any> {
  constructor(private ajaxGeneralService: AjaxGeneralService) {}

  resolve() {
    return this.ajaxGeneralService.getAjaxChildrenData().pipe(
      map(childs => {
        return childs;
      })
    );
  }
}
