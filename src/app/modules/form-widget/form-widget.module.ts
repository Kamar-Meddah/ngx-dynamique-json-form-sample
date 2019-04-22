import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {DynamiqueFormComponent} from './components/dynamique-form/dynamique-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';

@NgModule({
  declarations: [DynamiqueFormComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
  ],
  exports: [
    DynamiqueFormComponent
  ]
})
export class FormWidgetModule {
}
