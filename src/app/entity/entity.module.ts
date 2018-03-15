import { NgModule } from '@angular/core';
import { ProfileModule } from './profile/profile.module';
import { ExformModule } from './exform/exform.module';

@NgModule({
  imports: [
    ProfileModule,
    ExformModule
  ],
  declarations: []
})
export class EntityModule { }
