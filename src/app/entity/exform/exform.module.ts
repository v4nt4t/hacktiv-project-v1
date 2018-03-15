import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExformRoute } from './exform.route';
import { ExformComponent } from './exform.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const ENTITY_STATES = [
  ExformRoute
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ENTITY_STATES)
  ],
  declarations: [ExformComponent]
})
export class ExformModule { }
