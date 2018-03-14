import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LeftsidebarComponent } from './layout/leftsidebar/leftsidebar.component';
import { AppRouteModule } from './app-route.module';
import { HomeModule } from './home/home.module';


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
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
