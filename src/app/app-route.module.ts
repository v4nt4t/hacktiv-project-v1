import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from './layout/navbar/navbar.route';
import { leftsidebarRoute } from './layout/leftsidebar/leftsidebar.route';
import { footerRoute } from './layout/footer/footer.route';

const LAYOUT_ROUTES = [
    navbarRoute,
    leftsidebarRoute,
    footerRoute
];

@NgModule({
    imports:[
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports:[
        RouterModule  
    ]
})
export class AppRouteModule{}

