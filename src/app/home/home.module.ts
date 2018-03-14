import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoute } from './home.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([HomeRoute])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
