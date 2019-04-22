import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    MaterialModule
  ],
  exports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlyMaterialModule,
    MaterialModule
  ]
})
export class UiModule {
}
