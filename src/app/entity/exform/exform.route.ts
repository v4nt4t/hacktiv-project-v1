import { Route } from '@angular/router';
import { ExformComponent } from './exform.component';

export const ExformRoute: Route = {
    path: 'exform',
    component: ExformComponent,
    data: {
        authorities: []
    }
};
