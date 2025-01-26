import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable ({
    providedIn: 'root',
})
export class IdGurad implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = Number(route.params['lection']);
        const maxId = 2;

        if (id <= maxId) {
            console.log(id);
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
