import { Route } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const ProfileRoute: Route = {
    path: 'profile',
    component: ProfileComponent,
    data: {
        authorities: []
    }
};
