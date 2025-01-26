import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LectionComponent } from './components/lection/lection.component';
import { LectionOverviewComponent } from './components/lection-overview/lection-overview.component';
import { IdGurad } from './id-gurad';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
    },
    {
        path: 'lection/:lection', // lection:name
        component: LectionComponent,
        canActivate: [IdGurad]
    },
    {
        path: 'overview',
        component: LectionOverviewComponent
    }
];
