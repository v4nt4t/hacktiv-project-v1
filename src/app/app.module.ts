import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftsidebarComponent } from './layout/leftsidebar/leftsidebar.component';
import { AppRouteModule } from './app-route.module';
import { HomeModule } from './home/home.module';
import { EntityModule } from './entity/entity.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftsidebarComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRouteModule,
    HomeModule,
    EntityModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
