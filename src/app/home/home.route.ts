import { Route } from '@angular/router';
import { HomeComponent } from './home.component';


export const HomeRoute: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
