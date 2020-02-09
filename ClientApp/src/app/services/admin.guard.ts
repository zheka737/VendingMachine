import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  convertToParamMap
} from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
      if(next && next.params) {
        let paramsMap = convertToParamMap(next.params);
        return paramsMap.get('key') == '737';
      }

    return false;
  }
}
