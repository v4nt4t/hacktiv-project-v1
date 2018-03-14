import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileRoute } from './profile.route';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const ENTITY_STATES = [
  ProfileRoute
];

@NgModule({
  imports: [
    RouterModule.forChild(ENTITY_STATES),
    NgbModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
